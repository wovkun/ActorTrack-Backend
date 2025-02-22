const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  budget: { type: Number, required: true },
});

module.exports = mongoose.model('Performance', performanceSchema);
