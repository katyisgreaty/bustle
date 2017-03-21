import Ember from 'ember';

export default Ember.Component.extend({
  isBodyShowing: false,
  actions: {
    bodyShow: function() {
      this.set('isBodyShowing', true);
    }
  }
});
