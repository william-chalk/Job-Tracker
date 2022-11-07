const router = require("express").Router();
const { Interview } = require("../../models");
const isAuthenticated = require("../../middleware/isAuthenticated");

router.get("/", (req, res) => {
  Interview.findAll()
    .then((dbInterviewData) => res.json(dbInterviewData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post("/", isAuthenticated, (req, res) => {
  Interview.create({
    int_time: req.body.job_title,
    int_location: req.body.company_name,
    int_round: req.body.app_url,
    int_comments: req.body.app_status,
    user_id: req.session.user_id,
  })
    .then((dbInterviewData) => res.json(dbInterviewData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put("/:id", isAuthenticated, (req, res) => {
  Interview.update(
    {
      int_time: req.body.int_time,
      int_location: req.body.int_location,
      int_round: req.body.int_round,
      int_comments: req.body.int_comments,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbInterviewData) => {
      if (!dbInterviewData) {
        res.status(404).json({ message: "No Interview found with this id" });
        return;
      }
      res.json(dbInterviewData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", isAuthenticated, (req, res) => {
  Interview.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbInterviewData) => {
    if (!dbInterviewData) {
      res.status(404).json({ message: "No application found with this id" });
      return;
    }
    res.json(dbInterviewData);
  });
});

module.exports = router;
