const express = require("express");
const { authMiddleware } = require("../../middleware/auth");
const { Account } = require("../../db/db");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const { amount, to } = req.body;

  const account = await Account.findOne({
    userId: req.userId,
  });

  if (account.balance < amount) {
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  const toAccount = await Account.findOne({
    userId: to,
  });

  if (!toAccount) {
    return res.status(400).json({
      message: "Invalid account",
    });
  }

  await Account.updateOne(
    {
      userId: req.userId,
    },
    {
      $inc: {
        balance: -amount,
      },
    }
  );

  await Account.updateOne(
    {
      userId: to,
    },
    {
      $inc: {
        balance: amount,
      },
    }
  );

  res.json({
    message: "Transfer successful",
  });
});

//MongoServerError: Transaction numbers are only allowed on a replica set member or mongos

// router.post("/", authMiddleware, async (req, res) => {
//   const session = await mongoose.startSession();
//   session.startTransaction();
//   const { amount, to } = req.body;

//   const account = await Account.findOne({
//     userId: req.userId,
//   }).session(session);

//   if (!account || account.balance < amount) {
//     await session.abortTransaction();
//     return res.status(400).json({
//       message: "Insufficient balance",
//     });
//   }

//   const toAccount = await Account.findOne({
//     userId: to,
//   }).session(session);

//   if (!toAccount) {
//     await session.abortTransaction();
//     return res.status(400).json({
//       message: "Invalid account",
//     });
//   }

//   // Perform the transfer
//   await Account.updateOne(
//     {
//       userId: req.userId,
//     },
//     {
//       $inc: {
//         balance: -amount,
//       },
//     }
//   ).session(session);

//   await Account.updateOne(
//     {
//       userId: to,
//     },
//     {
//       $inc: {
//         balance: amount,
//       },
//     }
//   ).session(session);

//   // Commit the transaction
//   await session.commitTransaction();
//   res.json({
//     message: "Transfer successful",
//   });
// });

module.exports = router;
