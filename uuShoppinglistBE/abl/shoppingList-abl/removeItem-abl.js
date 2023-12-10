const ShoppingListDao = require("../../dao/shoppingLists-dao");

async function RemoveItemAbl(req, res) {
  let SLDao = new ShoppingListDao();
  const listId = req.params.listId;
  const itemId = req.params.itemId;

  try {
    const shoppingList = await SLDao.getList(listId);
    if (shoppingList) {
      shoppingList.items = shoppingList.items.filter(item => item.id !== itemId);
      await SLDao.updateList(listId, shoppingList);
      res.json({ success: true, message: "Item successfully deleted." });
    } else {
      res.status(404).json({ error: "Shopping list not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = RemoveItemAbl;
