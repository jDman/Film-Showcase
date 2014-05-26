    $('.test').click(function(e){
        e.preventDefault();
        boxOfficeFilms.reset();
        //boxOfficeFilms.query = $('#search').val();
        boxOfficeFilms.params = '/lists/movies/box_office';
        boxOfficeFilmsView.search();

    });
    var boxOfficeFilms = new Showcase.Collections.Film();
    var boxOfficeFilmsView = new Showcase.Views.Films({collection: boxOfficeFilms

    	width="61" height="91"