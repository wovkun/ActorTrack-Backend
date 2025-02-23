const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleName: { type: String, required: true },
    title: { type: String },
    experience: { type: Number, required: true },
    awards: [{ type: String }],
  }
);

module.exports = mongoose.model('Actor', actorSchema);
