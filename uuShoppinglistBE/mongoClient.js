const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";
const db = "ShoppingList";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let dbInstance = null;

async function connect() {
    try {
      await client.connect();
      console.log("Connected successfully to MongoDB");
      return client.db('ShoppingList');
    } catch (e) {
      console.error("Connection to MongoDB failed", e);
      process.exit(1);
    }
  }

module.exports = { connect };
