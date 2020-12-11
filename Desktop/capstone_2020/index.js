const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
app.use(cors());
let users = require("./model");
mongoose.connect(
  "mongodb+srv://admin:@dm!n@cluster0-s9mkj.mongodb.net/userDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

const router = express.Router();
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("Connection with MongoDB was successful");
});
app.use("/", router);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});

app.get("/getData", function (req, res) {
  users
    .find({})
    .then((result) => {
      console.log(result, "result");
      res.send(result);
    })
    .catch((err) => {
      console.log(err, "error");
      res.send(err);
    });
});
