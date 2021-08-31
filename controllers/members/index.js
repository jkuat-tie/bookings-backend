// create member
const createMember = async (req, res, Member) => {
  const { name, regNo } = req.body;
  await new Member({
    name,
    regNo,
  }).save((err) => {
    if (err) {
      res.status(500).json({ message: "Failed to create the member !" });
    } else {
      res.status(200).json({ message: "Member saved successfully !" });
    }
  });
};

// get member
const getMember = async (req, res, Member) => {
  const { id } = req.query;
  await Member.findOne({
    _id: id,
  }).exec((err, member) => {
    if (err) {
      res.status(500).json({ message: "Failed to fetch the member !" });
    } else {
      res.status(200).send(member);
    }
  });
};

// get members
const getMembers = async (req, res, Member) => {
  await Member.find().exec((err, members) => {
    if (err) {
      res.status(500).json({ message: "Failed to fetch members !" });
    } else {
      res.status(200).send(members);
    }
  });
};

// edit member
const editMember = async (req, res, Member) => {
  const { id } = req.query;
  const { name, regNo } = req.body;
  await Member.updateOne(
    {
      _id: id,
    },
    {
      name,
      regNo,
    }
  ).exec((err) => {
    if (err) {
      res.status(500).json({ message: "Failed to edit the member !" });
    } else {
      res.status(200).json({ message: "Member edited successfully !" });
    }
  });
};

// delete member
const deleteMember = async (req, res, Member) => {
  const { id } = req.query;
  Member.deleteOne({
    _id: id,
  }).exec((err) => {
    if (err) {
      res.status(500).json({ message: "Failed to delete the member !" });
    } else {
      res.status(200).json({ message: "Member deleted successfully !" });
    }
  });
};

module.exports = {
  createMember,
  getMember,
  getMembers,
  editMember,
  deleteMember,
};
