var express = require("express");
var router = express.Router();

// Import ABL skriptů
const CreateList = require("../abl/shoppingList-abl/createList-abl");
const GetList = require("../abl/shoppingList-abl/getList-abl");
const GetAllLists = require("../abl/shoppingList-abl/getAll-abl");
const DeleteList = require("../abl/shoppingList-abl/deleteList-abl");
const UpdateList = require("../abl/shoppingList-abl/updateList-abl");
const ArchiveList = require("../abl/shoppingList-abl/archiveList-abl");
const Invite = require("../abl/shoppingList-abl/invite-abl");
const ItemDone = require("../abl/shoppingList-abl/itemDone-abl");
const RemoveItem = require("../abl/shoppingList-abl/removeItem-abl");

// Vytvoření seznamu
router.post("/create", function (req, res) {
    CreateList(req, res);
});

// Získání seznamu podle ID
router.get("/get/:id", function (req, res) {
    GetList(req, res);
});

// Získání všech seznamů
router.get("/list", function (req, res) {
    GetAllLists(req, res);
});

// Smazání seznamu podle ID
router.delete("/delete/:id", function (req, res) {
    DeleteList(req, res);
});

// Aktualizace seznamu
router.put("/update/:id", function (req, res) {
    UpdateList(req, res);
});

// Archivace seznamu
router.put("/archive/:id", function (req, res) {
    ArchiveList(req, res);
});

// Pozvání uživatele
router.post("/invite/:id", function (req, res) {
    Invite(req, res);
});

// Označení položky jako dokončené
router.put("/itemDone/:listId/:itemId", function (req, res) {
    ItemDone(req, res);
});

// Odstranění položky
router.delete("/itemDelete/:listId/:itemId", function (req, res) {
    RemoveItem(req, res);
});

module.exports = router;
