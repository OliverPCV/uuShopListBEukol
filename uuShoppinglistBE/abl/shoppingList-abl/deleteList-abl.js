const ShoppingListDao = require("../../dao/shoppingLists-dao");

async function DeleteListAbl(req, res) {
  let SLDao = new ShoppingListDao();
  const listId = req.params.id;

  try {
    const shoppingList = await SLDao.getList(listId);
    if (shoppingList) {
      await SLDao.deleteList(listId);
      res.json({ success: true, message: `List ${listId} was successfully deleted.` });
    } else {
      res.status(404).json({ error: "Shopping list not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = DeleteListAbl;
