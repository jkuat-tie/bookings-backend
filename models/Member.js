const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  name: String,
  regNo: String,
});

mongoose.model("members", MemberSchema);
