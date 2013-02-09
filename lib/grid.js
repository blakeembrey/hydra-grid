var plugin = module.exports = function plugin () {
  'use strict';

  return function (style) {
    style.import(__dirname + '/grid');
  };
};

plugin.path    = __dirname;
plugin.version = require(__dirname + '/../package.json').version;
