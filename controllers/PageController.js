const { Application, User } = require("../models");

module.exports = {
  getDashboard: (req, res) => {
    Application.findAll({
      where: {
        user_id: req.session.currentUser.id,
      },
      attributes: [
        "id",
        "job_title",
        "company_name",
        "app_url",
        "app_status",
        "app_language",
      ],
      include: [
      //   {
      //     model: Interview,
      //     attributes: ["int_time", "int_location", "int_round", "int_comments"],
      //     include: {
      //       model: User,
      //       attributes: ["firstName", "lastName"],
      //     },
      //   },
      // {
      //   model: User,
      //   attributes: ["firstName", "lastName"],
      // },
      ],
    })
      .then(dbApplicationData => {
        const applications = dbApplicationData.map(app =>
          app.get({ plain: true })
        );
        console.table(applications);
        res.render("dashboard", { applications, isAuthenticated: req.session.isAuthenticated });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  getSingleApplication: (req, res) => {
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
      include: [
      //   {
      //     model: Interview,
      //     attributes: ["int_time", "int_location", "int_round", "int_comments"],
      //     include: {
      //       model: User,
      //       attributes: ["firstName", "lastName"],
      //     },
      //   },
        {
          model: User,
          attributes: ["firstName", "lastName"],
        },
      ],
    })
      .then(dbApplicationData => {
        if (!dbApplicationData) {
          res.status(404).json({ message: "No application with this id found" });
          return;
        }
        const application = dbApplicationData.get({ plain: true });

        res.render("edit-application", {
          application,
          isAuthenticated: req.session.isAuthenticated,
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};