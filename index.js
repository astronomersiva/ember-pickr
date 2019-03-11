'use strict';

const path = require('path');

module.exports = {
  name: require('./package').name,

  options: {
    autoImport: {
      alias: {
        pickr: 'pickr-widget/dist/pickr.min.js'
      }
    }
  },

  included: function() {
    this._super.included.apply(this, arguments);

    let findHost = this._findHost;
    let app = findHost.call(this);

    this.app = app;

    let pickr = path.join('node_modules', 'pickr-widget', 'dist');
    app.import(path.join(pickr, 'pickr.min.css'));
  }
};
