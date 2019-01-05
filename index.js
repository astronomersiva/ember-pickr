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

  included: function colpick_included() {
    this._super.included.apply(this, arguments);

    let pickr = path.join('node_modules', 'pickr-widget', 'dist');
    this.app.import(path.join(pickr, 'pickr.min.css'));
  }
};
