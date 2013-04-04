require.config({

  deps: ['main'],

  shim: {
    'jquery': {
      exports: '$'
    },
    'handlebars': {
      deps: ['jquery'],
      exports: 'Handlebars'
    },
    'ember': {
      deps: ['handlebars'],
      exports: 'Ember'
    }
  },

  paths: {
    jquery: '../../components/jquery/jquery',
    ember: '../../components/ember/ember',
    handlebars: '../../components/handlebars/handlebars'
  }

});