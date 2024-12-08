const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User, Account } = require("../../db/db");
const JWT_SECRET = require("../../config");

const router = express.Router();

const signupSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  email: zod.string(),
  password: zod.string(),
});

router.post("/", async (req, res) => {
  // first way to get data
  //   const firstName = req.body.firstName;
  //   const lastName = req.body.lastName;
  //   const email = req.body.email;
  //   const password = req.body.password;

  //   scond way
  //   const { firstName, lastName, email, password } = req.body;

  //thrid way
  const body = req.body;

  const { success } = signupSchema.safeParse(body);
  if (!success) {
    return res.json({
      msg: "Wrong Input!!",
    });
  }

  const existingUser = await User.findOne({ email: body.email });

  if (existingUser) {
    return res.status(400).json({ message: "Email is already registered!!" });
  }

  //first way of creating user
  // const user = await User.create(body)

  const dbUser = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
  });
  const token = jwt.sign(
    {
      userId: dbUser._id,
    },
    JWT_SECRET
  );

  //   console.log(`User named || ${body.firstName} || Created Successfully`);

  //Creating account in db
  const userId = dbUser._id;

  await Account.create({
    userId,
    balance: (1 + Math.random() * 10000).toFixed(2),
  });

  res.json({
    msg: "User Created Successfully",
    token: token,
  });
});

module.exports = router;
