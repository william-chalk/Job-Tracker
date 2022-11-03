const router = require('express').Router();
const { UserController } = require('../../controllers');
const applicationRoutes = require('../api/application-routes');
const interviewRoutes = require('../api/interview-routes');
const userRoutes = require('../api/user-routes');

const isAuthenticated = require('../../middleware/isAuthenticated');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/logout', isAuthenticated, UserController.logout);

router.use('/applications',applicationRoutes);
router.use('/interviews',interviewRoutes);
router.use('/users',userRoutes);

module.exports = router;