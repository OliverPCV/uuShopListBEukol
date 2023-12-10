const createListAbl = require('../abl/shoppingList-abl/createList-abl');
const assert = require('assert');

describe('CreateListAbl', function() {

  it('should create a new shopping list (happy day scenario)', async function() {
    const result = await createListAbl({ body: { listName: 'Nový Seznam', ownerId: '12345' } });
    assert.equal(result.success, true);
    assert.equal(result.list.name, 'Nový Seznam');
  });

  it('should return error for invalid input', async function() {
    try {
      await createListAbl({ body: { ownerId: '12345' } });
      assert.fail('should have thrown an error');
    } catch (e) {
      assert.equal(e.status, 400);
      assert.equal(e.message, 'Invalid input');
    }
  });

  it('should return error if list already exists', async function() {
    try {
      await createListAbl({ body: { listName: 'Existující Seznam', ownerId: '12345' } });
      assert.fail('should have thrown an error');
    } catch (e) {
      assert.equal(e.status, 400);
      assert.equal(e.message, 'List already exists');
    }
  });

  it('should handle database errors', async function() {
    try {
      await createListAbl({ body: { listName: 'Test Seznam', ownerId: '12345' } });
      assert.fail('should have thrown an error');
    } catch (e) {
      assert.equal(e.status, 500);
      assert.equal(e.message, 'Internal Server Error');
    }
  });
});
