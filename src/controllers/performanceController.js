const Performance = require('../models/Performance');
const handleInternalServerError = require('../utils/errorHandler');

const createPerformance = async (req, res) => {
  try {
    const { title, year, budget } = req.body;

    const newPerformance = new Performance({
      title,
      year,
      budget,
    });

    const savedPerformance = await newPerformance.save();
    res.status(201).json(savedPerformance);
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

const getPerformances = async (req, res) => {
  try {
    const performances = await Performance.find();
    res.status(200).json(performances);
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

const getPerformanceById = async (req, res) => {
  try {
    const performance = await Performance.findById(req.params.id);

    if (!performance) {
      return res.status(404).json({ message: 'Performance not found' });
    }

    res.status(200).json(performance);
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

const updatePerformance = async (req, res) => {
  try {
    const updatedPerformance = await Performance.findByIdAndUpdate(
      req.params.id,
      req.body,
    );

    if (!updatedPerformance) {
      return res.status(404).json({ message: 'Performance not found' });
    }

    res.status(200).json(performance);;
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

const deletePerformance = async (req, res) => {
  try {
    const deletedPerformance = await Performance.findByIdAndDelete(
      req.params.id
    );

    if (!deletedPerformance) {
      return res.status(404).json({ message: 'Performance not found' });
    }

    res.status(200).json({ message: 'Performance deleted successfully' });
  } catch (err) {
    handleInternalServerError(res, err);
  }
};

module.exports = {
  createPerformance,
  getPerformances,
  getPerformanceById,
  updatePerformance,
  deletePerformance,
};
