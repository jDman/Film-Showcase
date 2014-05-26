/*global Showcase, Backbone*/

Showcase.Models = Showcase.Models || {};

(function () {
    'use strict';

    Showcase.Models.Film = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
