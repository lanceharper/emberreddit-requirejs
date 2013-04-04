require([
    'routes/index',
    'ember-views/application',
    'jquery',
    'handlebars',
    'ember'
], function(IndexRoute, ApplicationView) {

    var App = Ember.Application.create({
      rootElement:'body',
      IndexRoute: IndexRoute,
      ApplicationView: ApplicationView,
      ready: function(){

          console.log('started');
      }
    });

    return App;
});