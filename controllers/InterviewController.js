

module.exports = {
  getAllInterviews: (req, res) => {
    Interview.findAll()
      .then(dbInterviewData => res.json(dbInterviewData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  createInterview: (req, res) => {
    Interview.create({
      int_time: req.body.job_title,
      int_location: req.body.company_name,
      int_round: req.body.app_url,
      int_comments: req.body.app_status,
      user_id: req.session.currentUser.id,
    })
      .then(dbInterviewData => res.json(dbInterviewData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  updateInterview: (req, res) => {
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
      .then(dbInterviewData => {
        if (!dbInterviewData) {
          res.status(404).json({ message: "No Interview found with this id" });
          return;
        }
        res.json(dbInterviewData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteInterview: (req, res) => {
    Interview.destroy({
      where: {
        id: req.params.id,
      },
    }).then(dbInterviewData => {
      if (!dbInterviewData) {
        res.status(404).json({ message: "No application found with this id" });
        return;
      }
      res.json(dbInterviewData);
    });
  }
};