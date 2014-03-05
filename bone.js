var yamlConfig = require('yaml-config');

module.exports = function attachConfig(skinny, file) {
    skinny.config = yamlConfig.readConfig(file);
};