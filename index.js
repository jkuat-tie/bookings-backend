const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const keys = require("./config/keys");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./routes"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the server !" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server started successfully !`);
  }
});
