// BEGIN-SNIPPET controller-components.js
import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.components = {
      opacity: false,
      hue: false,

      interaction: {
        hex: false,
        rgba: false,
        hsva: false,
        input: false,
      }
    };
  },

  actions: {
    handleOnChange(hsva) {
      this.set('value', hsva.toHEX().toString());
    }
  }
});
// END-SNIPPET
