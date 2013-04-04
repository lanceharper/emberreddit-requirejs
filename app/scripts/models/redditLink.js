define([
  'jquery',
  'handlebars',
  'ember'
],
    function ($, Handlebars, Ember) {

      var RedditLink = Ember.Object.extend({
        thumbnailUrl: function() {
          var thumbnail = this.get('thumbnail');
          return (thumbnail === 'default') ? null : thumbnail;
        }.property('thumbnail')
      });

      RedditLink.reopenClass({
         findAll: function(subreddit) {
           return $.getJSON("http://www.reddit.com/r/" + subreddit + "/.json?jsonp=?").then(function(response) {
             var links = [];
             response.data.children.forEach(function (child) {
               links.push(RedditLink.create(child.data));
             });
             return links;
           });
         }
      });

      return RedditLink;
    }
);