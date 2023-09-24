const express = require("express");
const app = express();
const port = process.env.PORt || 5000;
const chefData = require("./data/chefData.json");
const foodItemsData = require("./data/foodItemsData.json");
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Chef Server is running !!");
});
app.get("/chef", (req, res) => {
  res.send(chefData);
});
app.get("/food", (req, res) => {
  res.send(foodItemsData);
});
app.get("/food/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const singleItem = foodItemsData.find((item) => parseInt(item.id) === id);
  res.send(singleItem);
});

app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const categoryFood = foodItemsData.filter(
    (item) => parseInt(item.category_id) === id
  );
  res.send(categoryFood);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
