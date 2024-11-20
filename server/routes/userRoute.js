const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const { jwtAuthMiddleware } = require('../Middleware/jwtMiddleware');

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

// Example of a protected route that requires JWT
router.get('/protected', jwtAuthMiddleware, (req, res) => {
	res.status(200).json({
		message: 'This is a protected route',
		user: req.user
	});
});

module.exports = router;
