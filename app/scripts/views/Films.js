/*global Showcase, Backbone, JST*/

Showcase.Views = Showcase.Views || {};

(function () {
    'use strict';
/*$('#searchBtn').on('click', function(e){
        e.preventDefault();
        films.reset();
        films.query = $('#search').val();
        filmsView.search();
});*/
    Showcase.Views.Films = Backbone.View.extend({

        el: '#wrapper',

        template: JST['app/scripts/templates/Films.ejs'],

        tagName: 'div',

        initialize: function(){
            this.collection = new Showcase.Collections.Film(films); 
        },

        events: {
            'click #searchBtn' : 'searchFilms'
        },

        searchFilms: function(event) {
            console.log(this);
            var that = this;
            event && event.preventDefault();
            that.searchFilm = e.target.value;
            that.collection.reset();
            that.collection.query =  $('#search').val();

            that.collection.fetch({
                dataType: "jsonp",
                success: function(response){
                    that.render(response);
                    //console.log(response);
                },
                error: function(){console.log('error error error');}
            });
        },

        render: function () {
            $('#showcase').empty();
            this.collection.each(
                function(film){
                    var filmView = new Showcase.Views.Film({model:film});
                    $('#showcase').append(filmView.el);
                });

             return this;
             // console.log(this.$el);  
        }

    });

})();
