const { labs } = require("../../controllers");

module.exports = (router, Lab) => {
  // create lab
  router.post("/labs", (req, res) => {
    labs.createLab(req, res, Lab);
  });

  // get lab
  router.get("/labs", (req, res) => {
    labs.getLab(req, res, Lab);
  });

  // get labs
  router.get("/labs/all", (req, res) => {
    labs.getLabs(req, res, Lab);
  });

  // edit lab
  router.patch("/labs", (req, res) => {
    labs.editLab(req, res, Lab);
  });

  // delete lab
  router.delete("/labs", (req, res) => {
    labs.deleteLab(req, res, Lab);
  });
};
