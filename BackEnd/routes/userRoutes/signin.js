const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const { User } = require("../../db/db");
const JWT_SECRET = require("../../config");
const { authMiddleware } = require("../../middleware/auth");

const router = express.Router();

const signinBody = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

//signin route
router.get("/", authMiddleware, async (req, res) => {
  const { success } = signinBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({
    email: email,
    password: password,
  });

  if (!user) {
    res.status(411).json({
      msg: "Error while Signin!!",
    });
    return;
  }

  const token = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET
  );

  res.status(200).json({
    msg: "Signin Successfully",
    token,
  });
});

module.exports = router;
