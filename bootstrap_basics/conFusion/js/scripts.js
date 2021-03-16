$(document).ready(function() {
    var carousel = $('#carousel');
    var login = $('#loginButton');
    var button = $('#carouselButton');
    var reserve = $('#reserveButton');

    // Carousel modification
    carousel.carousel({ interval: 2000 });
    button.click(function(e) {
        if(button.children('i').hasClass('fa-pause')) {
            carousel.carousel('pause');
            button.children('i').removeClass('fa-pause');
            button.children('i').addClass('fa-play');
        }
        else {
            carousel.carousel('cycle');
            button.children('i').removeClass('fa-play');
            button.children('i').addClass('fa-pause');
        }
    })

    // Modal modification
    login.click(function(e) {
        $('#loginModal').modal('toggle');
    });
    reserve.click(function(e) {
        $('#reserveModal').modal('toggle');
    });

    // Enable tooltip
    // $('[data-toggle="tooltip"]').tooltip();
});