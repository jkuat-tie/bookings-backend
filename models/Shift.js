const mongoose = require("mongoose");

const ShiftSchema = new mongoose.Schema({
  shiftNo: Number,
  lab: { type: mongoose.Schema.Types.ObjectId, ref: "labs" },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "members" }],
});

mongoose.model("shifts", ShiftSchema);
