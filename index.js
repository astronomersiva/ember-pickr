'use strict';

const path = require('path');
const caniuse = require('caniuse-api')

module.exports = {
  name: require('./package').name,

  options: {
    autoImport: {
      alias: {}
    }
  },

  choosePickrForTargets(targets = {}) {
    let { browsers = [] } = targets;
    let browserQuery = browsers.join(',');
    if (caniuse.isSupported('es6-module', browserQuery)) {
      return '@simonwep/pickr/dist/pickr.min.js';
    }

    return '@simonwep/pickr/dist/pickr.es5.min.js';
  },

  included: function() {
    this._super.included.apply(this, arguments);

    let findHost = this._findHost;
    let app = findHost.call(this);

    this.app = app;

    let pickr = path.join('node_modules', '@simonwep/pickr', 'dist');
    app.import(path.join(pickr, 'pickr.min.css'));

    let targets = this.project.targets;
    this.options.autoImport.alias.pickr = this.choosePickrForTargets(targets);
  }
};
