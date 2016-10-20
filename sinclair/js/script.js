(function ($) {
    "use strict";

    //Initialization
    $(window).load(function () {
        //Page Loader
        $("body").imagesLoaded(function(){
           $(".page-loader div").fadeOut();
            $(".page-loader").delay(200).fadeOut("slow");
            
        });
        
        
        initCaseFilter();
    });
    $(document).ready(function () {
        init_masory();
    });
    
})(jQuery);



/*
 Case Page
 */
var fselector = 0;
var case_grid = $("#case-grid, #isotope");

function initCaseFilter() {
    (function ($) {
        "use strict";
        var isotope_mode;
        if(case_grid.hasClass("masonry")){
            isotope_mode = "mansory";
        }else{
            isotope_mode = "fitRows";
        }
    })(jQuery);
}

/*
Masonry
 */
function init_masory() {
    (function ($) {
        $(".masonry").imagesLoaded(function () {
            $(".masonry").masonry();
        });
    })(jQuery);
}

//Case top scroll effect
$(function () {
    var bar = $('.case-studies');

    var top = bar.css('top');
    $(window).scroll(function () {
        if($(this).scrollTop() > 50){
            bar.stop().animate({'top': "0"}, 500);

        }else{
            bar.stop().animate({'top': top}, 500);

        }
    });
    
    $(".about-case-studies .hover-type, .sticky-register-footer .subscribe-stf, .case-studies .hover-type").click(function () {
        //launch modal
        $('#registerPopup').modal();
    });
    
    $(".launch-chatbox").click(function(){
        $('#chatbox').modal();
    });
    
});



$(document).ready(function(){
    $('#stick-top-wp').waypoint(function (direction) {
        if(direction == 'down'){
            $('#stick-top-wp').addClass('fixed-navbar');
        }else{
            $('#stick-top-wp').removeClass('fixed-navbar');
        }
    });
    
    $('.section-title').waypoint(function (direction) {
        if(direction == 'down'){
            $('.sticky-register-footer').css('display', 'block');
        }
    });
    
    
    //Start carousel-group
    $('#carousel-group').owlCarousel({
        nav: true,
        items: 1,
        loop: true
    });


    //change nav text

    $('.owl-prev').html('<i class="glyphicon glyphicon-chevron-left"></i>');
    $('.owl-next').html('<i class="glyphicon glyphicon-chevron-right"></i>');

    //End carousel-group
})