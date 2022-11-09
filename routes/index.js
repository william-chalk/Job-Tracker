const router = require("express").Router();
const { PageController } = require("../controllers/index");

const isAuthenticated = require("../middleware/isAuthenticated");
const dashboardRoutes = require("./pages/dashboard-routes");
const apiRoutes = require("./api");
const homeRoutes = require("./pages/home-routes");

// Static pages
router.get("/register", (req, res) => res.render("register"));
router.get("/login", (req, res) => res.render("login"));

// Pages with data
router.get("/", isAuthenticated, PageController.getDashboard);

router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
