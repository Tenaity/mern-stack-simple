const jwt = require("jsonwebtoken");

exports.checkCurrentUser = (req, res, next) => {
  //Access Authorization from req header
  const Authorization = req.headers.authorization;

  if (!Authorization) {
    req.user = null;
    next();
  } else {
    const token = Authorization.replace("Bearer ", "");

    //Verify token
    try {
      const { userId } = jwt.verify(token, process.env.APP_SECRET);
      req.user = { userId };
      next();
    } catch (err) {
      req.user = null;
      next();
    }
  }
};
