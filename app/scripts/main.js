/*global Showcase, $*/


window.Showcase = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Key: 'ba9r7bufe3ran2pngngk7xb5',
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        
    }
};

$(document).ready(function () {
    'use strict';
    Showcase.init();

    //$('#searchBtn').on('click', function(e){
      //  e.preventDefault();
        //films.reset();
        //films.query = $('#search').val();
        //filmsView.search();
    //});

    //console.log(films);
    var filmsView = new Showcase.Views.Films({collection: films});
    //console.log(filmsView.collection);
    //filmView.render();
});
