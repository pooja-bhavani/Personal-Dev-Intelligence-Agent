const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Dev First Mate Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Dev First Mate running on ${PORT}`);
});
