

const jwt = require('jsonwebtoken');

module.exports = {
  async validateToken(req, res, next) {
    const { authorization } = req.headers;
    let auth = 'Bearer ' + authorization || '';
    auth = auth.split(' ');
    const token = auth[1];

    jwt.verify(token, process.env.KEY_PRIVATE_JWT, async (err) => {
      if (err) {
        return res.status(401).json({ ok: false, ERROR: err.message });
      }
    });
    next();
  },

  async handlerError(err, req, res, next) {
    res.status(err.status).json({ ERROR: err.message });
    next();
  },
};
