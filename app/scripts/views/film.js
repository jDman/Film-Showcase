/*global Showcase, Backbone, JST*/

Showcase.Views = Showcase.Views || {};

(function () {
    'use strict';

    Showcase.Views.Film = Backbone.View.extend({

        template: JST['app/scripts/templates/film.ejs'],

        tagName: 'div',

        className: 'film col-sm-6 col-md-4 col-lg-3',

        events: {
            'click' : 'slidePanel'
        },
        slidePanel: function(){
            var that = this;
            if(that.$el.find('.filmPanel').hasClass('slid')){
                that.$el.find('.filmPanel').removeClass('slid').animate({top: "+=258px"});
            } else {
                that.$el.find('.filmPanel').addClass('slid').animate({top: "-=258px"});
            }
            
            //that.$el.find('.filmScores').animate({});
            
        },
        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
            
        },

        render: function (response) {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})();
