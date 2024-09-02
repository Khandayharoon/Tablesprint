const express = require('express');
const { protect}  = require('../middleware/authMiddleware.js');

const { registerUser, authUser,authHome } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/home', protect,authHome)

module.exports = router;
