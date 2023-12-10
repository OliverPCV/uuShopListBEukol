const ShoppingListDao = require("../../dao/shoppingLists-dao");

async function InviteAbl(req, res) {
  let SLDao = new ShoppingListDao();
  const id = req.params.id;
  const newListUser = req.body.member;

  try {
    const shoppingList = await SLDao.getList(id);
    if (shoppingList) {
      shoppingList.members.push(newListUser);
      await SLDao.updateList(id, shoppingList);
      res.json({ success: true, message: "Invite was successful." });
    } else {
      res.status(404).json({ error: "Shopping list not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = InviteAbl;
