const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Application.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        "id",
        "job_title",
        "company_name",
        "app_url",
        "app_status",
        "app_language",
      ],
    //   Is this correct ? Not sure if the model interview goes here 
      include: [ 
        {
          model: Interview,
          attributes: [
          "id",
          "int_time",
          "int_location",
          "int_round",
          "int_comments",
        ],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
    //  Should this be dbApplicationData ? 
      .then(dbPostData => {
        const apps = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { apps, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
module.exports = router;