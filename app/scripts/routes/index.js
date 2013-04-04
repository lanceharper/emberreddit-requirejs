define([ '../models/redditLink', 'ember' ],

    function (RedditLink, Ember) {

      return Ember.Route.extend({
        model: function () {
          return RedditLink.findAll('aww');
        }
      });
    }
);

