define([
    'models/redditLink',
    'jquery',
    'handlebars',
    'ember'
],
    function () {

        return Ember.View.extend({
           templateName:'application',
           classNames:['viewport']
        });
    }
);