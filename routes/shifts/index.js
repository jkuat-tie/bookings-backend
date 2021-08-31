const { shifts } = require("../../controllers");

module.exports = (router, Shift) => {
  // create shift
  router.post("/shifts", (req, res) => {
    shifts.createShift(req, res, Shift);
  });

  // get shift
  router.get("/shifts", (req, res) => {
    shifts.getShift(req, res, Shift);
  });

  // get shifts
  router.get("/shifts/all", (req, res) => {
    shifts.getShifts(req, res, Shift);
  });
};
