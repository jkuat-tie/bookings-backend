const mongoose = require("mongoose");

const LabSchema = new mongoose.Schema({
  name: String,
  date: Date,
  nopShift: Number,
});

mongoose.model("labs", LabSchema);
