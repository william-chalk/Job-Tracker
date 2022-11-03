const router = require("express").Router();
const { Application, User, Interview } = require("../../models");

router.get('/',(req,res)=>{
    console.log("===============");
    Application.findAll({
        attributes: ['id',"job_title","company_name","app_url","app_status","app_language"],
        include:[
            {
                model: Interview,
                attributes: ["int_time","int_location","int_round","int_comments"],
                include:{
                    model:User,
                    attributes: ['firstName','lastName']
                }
            },
            {
                model: User,
                attributes: ['firstName','lastName']
            }
        ]
    })
    .then((dbHomeData)=>{
        const applications = dbHomeData.map((app)=>app.get({plain:true}));

        res.render("homepage",{
            applications,
            loggedIn: req.session.loggedIn
        });
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;