// BEGIN-SNIPPET controller-onSave.js
import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.components = {
      opacity: false,

      interaction: {
        hex: false,
        rgba: false,
        hsva: false,
        input: false,
      }
    };
  },

  actions: {
    handleOnSave(hsva) {
      if (hsva) {
        window.alert(`You chose ${hsva.toHEX().toString()}!`);
      }
    },

    handleOnChange(hsva) {
      this.set('value', hsva.toHEX().toString());
    }
  }
});
// END-SNIPPET
