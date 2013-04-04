require.config({

    deps: ['main'],

    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'hammer': {
            deps:['jquery'],
            exports:'Hammer'
        },
        'jquery.hammer': {
            deps: ['jquery', 'hammer']
        },
        'freetile' : {
            deps: ['jquery']
        }



    },

    paths: {
        jquery: '../../components/jquery/jquery',
        underscore: '../../components/underscore/underscore',
        backbone: '../../components/backbone/backbone',
        bootstrap: '../../components/bower-bootstrap-js/bootstrap',
        hammer: '../../components/hammer/dist/hammer',
        'jquery.hammer':'../../components/hammer/dist/jquery.hammer',
        freetile:'../../components/freetile/jquery.freetile'
    }

});