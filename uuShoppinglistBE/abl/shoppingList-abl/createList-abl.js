const ShoppingListDao = require("../../dao/shoppingLists-dao");

async function CreateListAbl(req, res) {
  let SLDao = new ShoppingListDao();
  let requestData = req.body;

  if (!requestData.listName) {
    return res.status(400).json({ error: "Invalid input" });
  }

  let newList = {
    name: requestData.listName,
    ownerId: requestData.ownerId,
    members: [],
    items: [],
    archived: false
  };

  try {
    const allLists = await SLDao.getAllLists();
    const alreadyExists = allLists.some(list => list.name === newList.name);

    if (alreadyExists) {
      return res.status(400).json({ error: "List already exists." });
    }

    const createdList = await SLDao.createNewList(newList);
    res.json({ success: true, message: "Shopping list created!", list: createdList });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = CreateListAbl;
