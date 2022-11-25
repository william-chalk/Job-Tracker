const router = require("express").Router();

const {
  createInterview,
  getAllInterviews,
  updateInterview,
  deleteInterview
} = require("../../controllers/InterviewController");

const isAuthenticated = require("../../middleware/isAuthenticated");

router.post("/", isAuthenticated, createInterview);
router.get("/", isAuthenticated, getAllInterviews);
router.put("/:id", isAuthenticated, updateInterview);
router.delete("/:id", isAuthenticated, deleteInterview);

// Alternatively, you could write the routes this way:
//
// router.use('/')
//  .post(isAuthenticated, createInterview)
//  .get(isAuthenticated, getAllInterviews);
//
// router.use('/:id')
//  .put(isAuthenticated, updateInterview)
//  .delete(isAuthenticated, deleteInterview);
//

module.exports = router;
