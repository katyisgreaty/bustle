import Ember from 'ember';

export default Ember.Component.extend({
  isBodyShowing: false,
  isFeatured: false,
  actions: {
    bodyShow: function() {
      this.set('isBodyShowing', true);
    },
    bodyHide: function() {
      this.set('isBodyShowing', false);
    },
    featuredShow: function() {
      this.set('isFeatured', true);
    },
    featuredHide: function() {
      this.set('isFeatured', false);
    }
  }
});
