const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
// const bodyParser = require("body-parser");
const userRoute = require("./routes/user");
const accountRoute = require("./routes/account");

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json()); // same as body parser
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRoute);
app.use("/account", accountRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000/`);
});
