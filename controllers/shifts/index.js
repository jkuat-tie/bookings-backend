// create shift
const createShift = async (req, res, Shift) => {
  const { shiftNo, lab, members } = req.body;
  await new Shift({
    shiftNo,
    lab,
    members,
  }).save((err) => {
    if (err) {
      res.status(500).json({ message: "Failed to create the shift !" });
    } else {
      res.status(200).json({ message: "Shift saved successfully !" });
    }
  });
};

// get shift
const getShift = async (req, res, Shift) => {
  const { id } = req.query;
  await Shift.findOne({
    _id: id,
  }).exec((err, shift) => {
    if (err) {
      res.status(500).json({ message: "Failed to fetch the shift !" });
    } else {
      res.status(200).send(shift);
    }
  });
};

// get shifts
const getShifts = async (req, res, Shift) => {
  await Shift.find().exec((err, shifts) => {
    if (err) {
      res.status(500).json({ message: "Failed to fetch shifts !" });
    } else {
      res.status(200).send(shifts);
    }
  });
};

module.exports = { createShift, getShift, getShifts };
