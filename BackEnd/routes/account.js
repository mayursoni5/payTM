const express = require("express");
const router = express.Router();

const balanceRoute = require("./accountRoutes/balance");
const transferRoute = require("./accountRoutes/transfer");

router.get("/", (req, res) => {
  res.send("This is account route");
});

router.use("/balance", balanceRoute);
router.use("/transfer", transferRoute);

module.exports = router;
