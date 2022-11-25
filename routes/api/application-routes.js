const router = require("express").Router();

const {
  createApplication,
  getAllApplications,
  getSingleApplication,
  deleteApplication
} = require("../../controllers/ApplicationController");

const isAuthenticated = require("../../middleware/isAuthenticated");

router.post("/", isAuthenticated, createApplication);
router.get("/", getAllApplications);
router.get("/:id", getSingleApplication);
router.delete("/:id", isAuthenticated, deleteApplication);

module.exports = router;
