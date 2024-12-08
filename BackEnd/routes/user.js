const express = require("express");
const signupRoute = require("./userRoutes/signup");
const signInRoute = require("./userRoutes/signin");
const updateInfoRoute = require("./userRoutes/updateInfo");
const bulkRouter = require("./userRoutes/bulk");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    `||This is a user page||<br>You can go further by going to these URLs:<br>` +
      `<a href="/user/signup">/user/signup</a><br>` +
      `<a href="/user/signin">/user/signin</a><br>` +
      `<a href="/user/updateinfo">/user/updateinfo</a><br>` +
      `<a href="/user/bulk">/user/bulk</a>`
  );
});

router.use("/signup", signupRoute);
router.use("/signin", signInRoute);
router.use("/updateinfo", updateInfoRoute);
router.use("/bulk", bulkRouter);

module.exports = router;

// {
//   "firstName": "naman",
//   "lastName": "Doe",
//   "email": "aujgjjasddgrdhkkjhdlj",
//   "password": "securePassword123"
// }
