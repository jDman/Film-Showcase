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

        initialize: function(){
            this.collection.query = "X-men";
            this.getFilms();
        },

        events: {
            "click #searchBtn" : "searchFilms"          
        },

        getFilms: function(){
           var that = this;
            that.collection.fetch({
                dataType: "jsonp",
                success: function(response){
                    that.render(response);
                },
                error: function(){console.log('error error error');}
            });     
        },

        searchFilms: function(event) {
            var that = this;
            event && event.preventDefault();

            that.collection.reset();
            that.collection.query =  $('#search').val();

            this.getFilms();
            console.log("clicked");
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
