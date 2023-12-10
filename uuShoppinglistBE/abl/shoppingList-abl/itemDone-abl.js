const ShoppingListDao = require("../../dao/shoppingLists-dao");

async function ItemDoneAbl(req, res) {
  let SLDao = new ShoppingListDao();
  const listId = req.params.listId;
  const itemId = req.params.itemId;

  try {
    const shoppingList = await SLDao.getList(listId);
    if (shoppingList) {
      const itemIndex = shoppingList.items.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        shoppingList.items[itemIndex].isCompleted = true;
        await SLDao.updateList(listId, shoppingList);
        res.json({ success: true, message: "Item set as done." });
      } else {
        res.status(404).json({ error: "Item not found." });
      }
    } else {
      res.status(404).json({ error: "Shopping list not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = ItemDoneAbl;
