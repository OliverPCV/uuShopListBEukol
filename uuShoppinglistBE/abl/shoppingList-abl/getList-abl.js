const ShoppingListDao = require("../../dao/shoppingLists-dao");

async function GetListAbl(req, res) {
    let SLDao = new ShoppingListDao();
    const listId = req.params.id;

    try {
        const shoppingList = await SLDao.getList(listId);
        if (shoppingList) {
            res.status(200).json(shoppingList);
        } else {
            res.status(404).json({ error: "Shopping list not found." });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = GetListAbl;