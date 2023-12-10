const ShoppingListDao = require("../../dao/shoppingLists-dao");

async function UpdateListAbl(req, res) {
  let SLDao = new ShoppingListDao();
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const shoppingList = await SLDao.getList(id);
    if (shoppingList) {
      await SLDao.updateList(id, updatedData);
      res.json({ success: true, message: "Shopping list updated!", shoppingList: updatedData });
    } else {
      res.status(404).json({ error: "Shopping list does not exist" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = UpdateListAbl;
