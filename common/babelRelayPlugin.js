var getbabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../../records/static/schema.json');

module.exports = getbabelRelayPlugin(schema.data);
