const ShoppingListDao = require("../../dao/shoppingLists-dao");

async function ArchiveListAbl(req, res) {
  let SLDao = new ShoppingListDao();
  const id = req.params.id;

  try {
    const shoppingList = await SLDao.getList(id);
    if (shoppingList) {
      const updatedData = { ...shoppingList, archived: true };
      await SLDao.updateList(id, updatedData);
      res.json({ success: true, message: "Shopping list is successfully archived." });
    } else {
      res.status(404).json({ error: "Shopping list not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = ArchiveListAbl;
