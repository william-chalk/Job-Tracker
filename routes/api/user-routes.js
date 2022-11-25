const router = require("express").Router();

const {
  register,
  login,
  logout,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser
} = require("../../controllers/UserController");

const isAuthenticated = require("../../middleware/isAuthenticated");

router.post("/", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/", getAllUsers);
router.get("/:id", isAuthenticated,getSingleUser);
router.put("/:id", isAuthenticated, updateUser);
router.delete("/:id", isAuthenticated, deleteUser);

// Alternatively, for the previous three routes, you could use:
//
// router.use('/:id')
//  .get(isAuthenticated, getSingleUser)
//  .put(isAuthenticated, updateUser)
//  .delete(isAuthenticated, deleteUser);
//

module.exports = router;
