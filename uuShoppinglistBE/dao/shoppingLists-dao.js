const { ObjectId } = require('mongodb');
const { connect } = require('../mongoClient');

class ListsDataAccessObject {
    async getCollection() {
        const db = await connect();
        return db.collection('lists');
    }

    async getList(listId) {
        const collection = await this.getCollection();
        return collection.findOne({ _id: new ObjectId(listId) });
    }

    async getAllLists() {
        const collection = await this.getCollection();
        return collection.find({}).toArray();
    }

    async createNewList(list) {
        const collection = await this.getCollection();
        const result = await collection.insertOne(list);
        return result.ops[0];
    }

    async updateList(id, updatedData) {
        const collection = await this.getCollection();
        await collection.updateOne({ _id: new ObjectId(id) }, { $set: updatedData });
        return this.getList(id);
    }

    async deleteList(listId) {
        const collection = await this.getCollection();
        await collection.deleteOne({ _id: new ObjectId(listId) });
    }
}

module.exports = ListsDataAccessObject;
