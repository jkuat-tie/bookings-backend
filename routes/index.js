const express = require("express");
const mongoose = require("mongoose");

const labs = require("./labs");
const members = require("./members");
const shifts = require("./shifts");

require("../models/Lab");
require("../models/Member");
require("../models/Shift");

const Lab = mongoose.model("labs");
const Member = mongoose.model("members");
const Shift = mongoose.model("shifts");

const router = express.Router();

labs(router, Lab);
members(router, Member);
shifts(router, Shift);

module.exports = router;
