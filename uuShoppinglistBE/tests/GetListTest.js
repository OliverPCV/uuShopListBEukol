const GetListAbl = require('../abl/shoppingList-abl/getList-abl');
const assert = require('assert');

describe('GetListAbl', function() {
  it('should return a shopping list by id (happy day scenario)', async function() {
      let res = { json: function(data) { this.data = data; return this; }, status: function(statusCode) { this.statusCode = statusCode; return this; }};
      await GetListAbl({ params: { id: '65639c13588c34bec5e20e7c' } }, res);
      assert.equal(res.statusCode, 200);
      assert.equal(typeof res.data, 'object');
  });

    it('should return error if list does not exist', async function() {
        let res = { json: function(data) { this.data = data; return this; }, status: function(statusCode) { this.statusCode = statusCode; return this; }};
        await GetListAbl({ params: { id: '42039c13588c34bec5e20e7d' } }, res);
        assert.equal(res.statusCode, 404);
    });

    it('should handle database errors', async function() {
        let res = { json: function(data) { this.data = data; return this; }, status: function(statusCode) { this.statusCode = statusCode; return this; }};
        await GetListAbl({ params: { id: 'anyId' } }, res);
        assert.equal(res.statusCode, 500);
    });
});