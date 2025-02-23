const Contract = require('../models/Contract');
const handleInternalServerError = require('../utils/errorHandler');

const createContract = async (req, res) => {
  try {
    const { actorId, performanceId, role, contractValue, bonus } = req.body;

    const newContract = new Contract({
      actorId,
      performanceId,
      role,
      contractValue,
      bonus,
    });

    const savedContract = await newContract.save();
    res.status(201).json(savedContract);
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

const getContracts = async (req, res) => {
  try {
    const contracts = await Contract.find()
      .populate('actorId', 'firstName lastName rank experience')
      .populate('performanceId', 'title year budget');
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
    const updatedContract = await Contract.findByIdAndUpdate(
      req.params.id,
      req.body,
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
    const deletedContract = await Contract.findByIdAndDelete(req.params.id);

    if (!deletedContract) {
      return res.status(404).json({ message: 'Contract not found' });
    }

    res.status(200).json({ message: 'Contract deleted successfully' });
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
