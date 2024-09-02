const jwt = require('jsonwebtoken');
const {User} = require('../config/db.js'); 

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log("Token:", token);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded JWT:", decoded);

      req.user = await User.findById(decoded.id).select('-password');
      if (!req.user) {
        return res.status(404).json({ message: 'User not found' });
      }
      next();
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
