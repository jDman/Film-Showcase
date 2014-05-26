/*global Showcase, Backbone*/

Showcase.Collections = Showcase.Collections || {};

(function () {
    'use strict';

    Showcase.Collections.Film = Backbone.Collection.extend({

        model: Showcase.Models.Film,
        query:'',
        params: '/movies',
        url: function(){
        	var apikey = Showcase.Key;

    		var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";
     
    		// construct the uri with our apikey

    		var moviesSearchUrl = baseUrl + this.params + '.json?apikey=' + apikey;

    		var query =  "&q=" + this.query + "&page_limit=12";

    		var url = moviesSearchUrl + encodeURI(query);
            //console.log(url);
    		return url;
        },
        parse: function(data) {
        	return data.movies;
        }

    });

})();

//box office
//http://api.rottentomatoes.com/api/public/v1.0   /lists/movies/box_office     .json?apikey=[your_api_key]

//moviesSearch
//http://api.rottentomatoes.com/api/public/v1.0   /movies      .json?apikey=[your_api_key]&q=

