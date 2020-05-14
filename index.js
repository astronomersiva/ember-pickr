'use strict';

const defaultOptions = { themes: ['classic'] };

function buildOptions(app) {
  const customOptions = app.options['ember-pickr'] || {};

  return Object.assign({}, defaultOptions, customOptions);
}

module.exports = {
  name: require('./package').name,

  options: {
    babel: {
      plugins: [ require.resolve('ember-auto-import/babel-plugin') ]
    }
  },

  included: function() {
    this._super.included.apply(this, arguments);

    let findHost = this._findHost;
    let app = findHost.call(this);
    const options = buildOptions(app);

    this.app = app;

    options.themes.forEach(theme =>
      app.import(`node_modules/@simonwep/pickr/dist/themes/${theme}.min.css`));
  }
};
