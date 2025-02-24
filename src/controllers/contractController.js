const Contract = require('../models/Contract');
const handleInternalServerError = require('../utils/errorHandler');
const mongoose = require('mongoose');
const Actor = require('../models/Actor');
const Performance = require('../models/Performance');

const createContract = async (req, res) => {
  try {
    const { actorId, performanceId, role, baseSalary, bonus } = req.body;

    if (
      !actorId ||
      !performanceId ||
      !mongoose.Types.ObjectId.isValid(actorId) ||
      !mongoose.Types.ObjectId.isValid(performanceId)
    ) {
      return res
        .status(400)
        .json({ message: 'Invalid or missing actorId or performanceId' });
    }

    const actor = await Actor.findById(actorId);
    if (!actor) {
      return res.status(404).json({ message: 'Actor not found' });
    }

    const awardsBonus = actor.awards.length * 5000;

    const rolesCount = await Contract.countDocuments({ actorId });

    const rolesBonus = rolesCount * 2000;

    const adjustedBonus = (bonus ?? 0) + awardsBonus + rolesBonus;

    const performance = await Performance.findById(performanceId);
    if (!performance) {
      return res.status(404).json({ message: 'Performance not found' });
    }

    const decreaseAmount = baseSalary + adjustedBonus;

    if (performance.budget - decreaseAmount < 0) {
      return res
        .status(405)
        .json({ message: 'Not enough budget to create contract', status: 405 });
    }

    performance.budget -= decreaseAmount;

    await performance.save();

    const contract = new Contract({
      actorId,
      performanceId,
      role,
      baseSalary,
      bonus: adjustedBonus,
    });

    const savedContract = await contract.save();

    res.status(201).json(savedContract);
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

const getContracts = async (req, res) => {
  try {
    const contracts = await Contract.find();

    res.status(200).json(contracts);
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

const getContractById = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id)
      .populate('actorId', 'firstName lastName rank experience')
      .populate('performanceId', 'title year budget');

    if (!contract) {
      return res.status(404).json({ message: 'Contract not found' });
    }

    res.status(200).json(contract);
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

const updateContract = async (req, res) => {
  try {
    const { actorId, performanceId, role, baseSalary, bonus } = req.body;
    const updatedContract = await Contract.findByIdAndUpdate(
      req.params.id,
      {
        actorId,
        performanceId,
        role,
        baseSalary,
        bonus: bonus ?? 0,
      },
      { new: true }
    );

    if (!updatedContract) {
      return res.status(404).json({ message: 'Contract not found' });
    }

    res.status(200).json(updatedContract);
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

const deleteContract = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id);

    if (!contract) {
      return res.status(404).json({ message: 'Contract not found' });
    }
    const performance = await Performance.findById(contract.performanceId);

    if (!performance) {
      return res
        .status(404)
        .json({ message: 'Associated performance not found' });
    }

    performance.budget += contract.baseSalary + contract.bonus;
    await performance.save();

    await Contract.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ message: 'Contract deleted successfully, budget restored' });
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

module.exports = {
  createContract,
  getContracts,
  getContractById,
  updateContract,
  deleteContract,
};
