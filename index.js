const express = require("express");

const app = express();

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
