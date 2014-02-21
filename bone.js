var yamlConfig = require('yaml-config');

module.exports = function(skinny, file) {
    skinny.config = yamlConfig.readConfig(file);
};