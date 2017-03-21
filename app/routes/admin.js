import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },

  actions: {
    saveArticle(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('index');
    },

    destroyArticle(article) {
      if (confirm('Are you sure you want to delete this article?')) {
        article.destroyRecord();
        this.transitionTo('admin');
      }
    },

    // markFeatured(article) {
    //   if (confirm('Are you sure you want to mark this article as featured?')) {
    //     // this.featuredShow();
    //     this.transitionTo('index');
    //   }
    // }

    update(article, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          article.set(key,params[key]);
        }
      });
      article.save();
      this.transitionTo('index');
    }
  }
});
