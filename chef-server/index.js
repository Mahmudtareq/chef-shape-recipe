const express = require("express");
const app = express();
const port = process.env.PORt || 5000;

app.get("/", (req, res) => {
  res.send("Chef Server is running !!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
