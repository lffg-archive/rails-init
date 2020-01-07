const [, settings] = require('eslint-config-lffg').rules['prettier/prettier'];

module.exports = {
  ...settings,

  // Ruby prettier plugin:
  preferSingleQuotes: false
};
