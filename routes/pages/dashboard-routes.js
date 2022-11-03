const router = require('express').Router();
const {User, Application,Interview} = require('../../models');
const isAuthenticated = require('../../middleware/isAuthenticated');

router.get("/",isAuthenticated,(req,res)=>{
    Application.findAll({
        where:{
            user_id: req.session.user_id
        },
        attributes: ['id',]
    })
})