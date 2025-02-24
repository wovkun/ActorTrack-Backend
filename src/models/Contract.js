const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  actorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Actor',
    required: true,
  },
  performanceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Performance',
    required: true,
  },
  role: { type: String, required: true },
  baseSalary: { type: Number, required: true },
  bonus: { type: Number, default: 0 },
});

module.exports = mongoose.model('Contract', contractSchema);
