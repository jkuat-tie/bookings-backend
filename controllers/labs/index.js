// create lab
const createLab = async (req, res, Lab) => {
  const { name, date, nopShift } = req.body;
  await new Lab({
    name,
    date,
    nopShift,
  }).save((err) => {
    if (err) {
      res.status(500).json({ message: "Failed to create the lab !" });
    } else {
      res.status(200).json({ message: "Lab saved successfully !" });
    }
  });
};

// get lab
const getLab = async (req, res, Lab) => {
  const { id } = req.query;
  await Lab.findOne({
    _id: id,
  }).exec((err, lab) => {
    if (err) {
      res.status(500).json({ message: "Failed to fetch the lab !" });
    } else {
      res.status(200).send(lab);
    }
  });
};

// get labs
const getLabs = async (req, res, Lab) => {
  await Lab.find().exec((err, labs) => {
    if (err) {
      res.status(500).json({ message: "Failed to fetch labs !" });
    } else {
      res.status(200).send(labs);
    }
  });
};

// edit lab
const editLab = async (req, res, Lab) => {
  const { id } = req.query;
  const { name, date } = req.body;
  await Lab.updateOne(
    {
      _id: id,
    },
    {
      name,
      date,
    }
  ).exec((err) => {
    if (err) {
      res.status(500).json({ message: "Failed to edit the lab !" });
    } else {
      res.status(200).json({ message: "Lab edited successfully !" });
    }
  });
};

// delete lab
const deleteLab = async (req, res, Lab) => {
  const { id } = req.query;
  Lab.deleteOne({
    _id: id,
  }).exec((err) => {
    if (err) {
      res.status(500).json({ message: "Failed to delete the lab !" });
    } else {
      res.status(200).json({ message: "Lab deleted successfully !" });
    }
  });
};

module.exports = { createLab, getLab, getLabs, editLab, deleteLab };
