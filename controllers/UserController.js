const { User } = require("../models");

// CREATE new user
module.exports = {
  register: async (req, res) => {
    const {
      body: {
        firstName,
        lastName,
        email,
        password
      },
    } = req;
    try {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
      });

      delete user.password;

      req.session.save(() => {
        req.session.isAuthenticated = true;
        req.session.currentUser = user;
        res.status(200).json(user);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  login: async (req, res) => {
    const {
      body: { email, password },
    } = req;
    try {
      const user = await User.findOne({
        where: { email },
        attributes: { exclude: ["createdAt, updatedAt"] },
      });

      if (!user) {
        res
          .status(400)
          .json({ message: "Incorrect email or password. Please try again!" });
        return;
      }

      const validPassword = await user.checkPassword(password);

      if (!validPassword) {
        res
          .status(400)
          .json({ message: "Incorrect email or password. Please try again!" });
        return;
      }

      delete user.password;
      req.session.save(() => {
        req.session.isAuthenticated = true;
        req.session.currentUser = user;
        res.status(200).json({ user,  message: "You are now logged in!" });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  logout: (req, res) => {
    if (req.session.isAuthenticated) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },

  getAllUsers: (req, res) => {
    User.findAll({
      attributes: { exclude: ["password"] },
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  getSingleUser: (req, res) => {
    User.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Application,
          attributes: [
            "id",
            "job_title",
            "company_name",
            "app_url",
            "app_status",
            "app_language",
          ],
        },
        {
          model: Interview,
          attributes: [
            "id",
            "int_time",
            "int_location",
            "int_round",
            "int_comments",
          ],
        },
      ],
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateUser: (req, res) => {
    User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id,
      },
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: "No User found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteUser: (req, res) => {
    User.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
};
