const { members } = require("../../controllers");

module.exports = (router, Member) => {
  // create member
  router.post("/members", (req, res) => {
    members.createMember(req, res, Member);
  });

  // get member
  router.get("/members", (req, res) => {
    members.getMember(req, res, Member);
  });

  // get members
  router.get("/members/all", (req, res) => {
    members.getMembers(req, res, Member);
  });

  // edit member
  router.patch("/members", (req, res) => {
    members.editMember(req, res, Member);
  });

  // delete member
  router.delete("/members", (req, res) => {
    members.deleteMember(req, res, Member);
  });
};
