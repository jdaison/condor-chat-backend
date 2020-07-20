const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  async validateToken(req, res, next) {
    try {
      if(!req.headers.authorization){
        return res.status(401).json({ ok: false, ERROR: "Invalidd authorization" });        
      }
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.KEY_PRIVATE_JWT);
      req.userId = decoded.userId;
      req.userType = decoded.type;
      next();
    } catch (err) {
      return res.status(401).json({ ok: false, ERROR: err.message });
    }
  },
  async handlerError(err, req, res, next) {
    res.status(err.status).json({ ERROR: err.message });
    next();
  },
};
