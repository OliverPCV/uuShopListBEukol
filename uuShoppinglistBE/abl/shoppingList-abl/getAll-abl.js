const ShoppingListDao = require('../../dao/shoppingLists-dao');

async function GetAllAbl(req, res) {
  let SLDao = new ShoppingListDao();

  try {
    const shoppingLists = await SLDao.getAllLists();
    if (shoppingLists.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json(shoppingLists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = GetAllAbl;
