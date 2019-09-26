// BEGIN-SNIPPET null-example.js
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    onInit(pickrInstance) {
      pickrInstance.setColor(null);
    }
  }
});
// END-SNIPPET
