const router = require("express").Router();
const userRoutes = require("../api/user-routes");
const applicationRoutes = require("../api/application-routes");
const interviewRoutes = require("../api/interview-routes");
const { UserController } = require("../../controllers");

const isAuthenticated = require("../../middleware/isAuthenticated");

router.use("/users", userRoutes);
router.use("/applications", applicationRoutes);
router.use("/interviews", interviewRoutes);

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/logout", isAuthenticated, UserController.logout);

module.exports = router;
