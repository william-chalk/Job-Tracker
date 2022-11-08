const router = require("express").Router();
const { PageController } = require("../../controllers/");

const isAuthenticated = require("../../middleware/isAuthenticated");
const dashboardRoutes = require("./dashboard-routes");
const homeRoutes = require("./home-routes");

// Static pages
router.get("/register", (req, res) => res.render("register"));
router.get("/login", (req, res) => res.render("login"));

// Pages with data
router.get("/", isAuthenticated, PageController.getDashboard);

router.use("/dashboard", dashboardRoutes);
router.use("/", homeRoutes);

module.exports = router;
