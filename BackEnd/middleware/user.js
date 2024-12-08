const { User } = require("../db/db");

function userMiddleware(req, res, next) {
  const email = req.headers.email;
  const password = req.headers.password;

  User.findOne({
    email: email,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({
        msg: "User doesnt exist",
      });
    }
  });
}

module.exports = userMiddleware;
