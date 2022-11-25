const { Application } = require("../models");

module.exports = {
  createApplication: (req, res) =>
    Application.create({
      job_title: req.body.job_title,
      company_name: req.body.company_name,
      app_url: req.body.app_url,
      app_status: req.body.app_status,
      app_language: req.body.app_language,
      user_id: req.session.currentUser.id,
    })
      .then(dbAppData => res.json(dbAppData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      }),

  getAllApplications: (req, res) =>
    Application.findAll()
      .then(dbAppData => res.json(dbAppData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      }),

  getSingleApplication: (req, res) =>
    Application.findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "job_title",
        "company_name",
        "app_url",
        "app_status",
        "app_language",
      ],
    // include: [
    //   {
    //     model: Interview,
    //     attributes: [
    //       "id",
    //       "app_id",
    //       "int_time",
    //       "int_location",
    //       "int_round",
    //       "int_comments",
    //       "user_id",
    //     ],
    //     include: {
    //       model: User,
    //       attributes: ["firstName", "lastName"],
    //     },
    //   },
    // ],
    })
      .then(dbAppData => res.json(dbAppData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      }),

  deleteApplication: (req, res) =>
    Application.destroy({
      where: {
        id: req.params.id,
      },
    }).then(dbAppData => {
      if (!dbAppData) {
        res.status(404).json({ message: "No application found with this id" });
        return;
      }
      res.json(dbAppData);
    })
};