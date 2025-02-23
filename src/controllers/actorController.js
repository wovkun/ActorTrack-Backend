const Actor = require('../models/Actor');
const handleInternalServerError = require('../utils/errorHandler');

const getAllActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.status(200).json(actors);
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

const getActorById = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);

    if (!actor) {
      return res.status(404).json({ message: 'Actor not found' });
    }
    res.status(200).json(actor);
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

const updateActor = async (req, res) => {
  try {
    const { firstName, lastName, title, experience, awards } = req.body;

    const actor = await Actor.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, title, experience, awards },
      { new: true }
    );
    if (!actor) {
      return res.status(404).json({ message: 'Actor not found' });
    }
    res.status(200).json(actor);
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

const deleteActor = async (req, res) => {
  try {
    const actor = await Actor.findByIdAndDelete(req.params.id);

    if (!actor) {
      return res.status(404).json({ message: 'Actor not found' });
    }

    res.status(200).json({ message: 'Actor deleted successfully' });
  } catch (err) {
    handleInternalServerError(res, err);
  }
};
const createActor = async (req, res) => {
  try {
    const { firstName, lastName, middleName, title, experience, awards } =
      req.body;

    if (!firstName || !lastName || !middleName || !title) {
      return res
        .status(400)
        .json({
          message: 'First name, last name,middle name and title are required',
        });
    }

    const newActor = new Actor({
      firstName,
      lastName,
      middleName,
      title,
      experience,
      awards,
    });

    await newActor.save();

    res.status(201).json({
      message: 'Actor created successfully',
      actor: newActor,
    });
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

module.exports = {
  getAllActors,
  getActorById,
  updateActor,
  deleteActor,
  createActor,
};
