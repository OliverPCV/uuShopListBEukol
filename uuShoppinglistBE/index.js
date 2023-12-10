const express = require("express");
const shoppingListController = require("./controllers/shoppingLists");
const mongoose = require("./mongoClient");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8000;

app.use("/shoppingList", shoppingListController);

app.listen(port, () => {
    console.log(`Server běží na portu ${port}`);
});
