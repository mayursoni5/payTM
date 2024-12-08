const express = require("express");
const { Account } = require("../../db/db");
const { authMiddleware } = require("../../middleware/auth");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  //   const userId = req.body.userId;
  const account = await Account.findOne({
    userId: req.userId,
  });
  res.json({
    balance: account.balance,
  });
});

module.exports = router;
