var konfig = require('konfig');

module.exports = function attachConfig(skinny, path) {
    skinny.config = konfig({ path });
};