// BEGIN-SNIPPET controller-onSave.js
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    handleOnSave(hsva) {
      window.alert(`You chose ${hsva.toHEX().toString()}!`);
    }
  }
});
// END-SNIPPET
