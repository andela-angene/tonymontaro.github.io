
    //Define nav waypoint
    var waypoint = new Waypoint({
        element: document.getElementById('nav_wrap_two'),
        handler: function(direction) {
            if(direction == 'down'){

                //                        $('#nav_wrap_two').css('display', 'none');
                //                        $('#nav_wrap_two').fadeIn();
                $('#nav_wrap_two').addClass('fixed_nav_wrap');
                $('body').addClass('body-pad');

            }
            if(direction == 'up'){
                $('body').removeClass('body-pad');
                $('#nav_wrap_two').removeClass('fixed_nav_wrap');
            }
        },

    });


//add cat-menu-ul items to mobile menu
var catMenu = $('.cat-menu-ul').html();
catMenu = catMenu.replace(/<li><img src="images\/round-star.png" class="middle-menu"><\/li>/gi, "");
$("#dropdown-menu1").html(catMenu);
//add link-menu items to sub mobile nav
var linkMenu = $('.link-menu-ul').html();
$("#dropdown-menu2").html(linkMenu);

//auto expand menu
$('.navbar-toggle').click(function(){
    setTimeout(
        function() 
        {
            $('#dropdown1').addClass('open');
            $('.dropdown-toggle1').attr('expanded','true');
        }, 300);
});


$(document).ready(function() {

    $("#owl-demo").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        nav : true,
        items: 1,
        loop: true,
        smartSpeed: 300,

    });
    $("#owl-demo-lazy").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        nav : true,
        items: 1,
        loop: true,
        smartSpeed: 300,

    });

    //change nav text

    $('.owl-prev').html('<i class="glyphicon glyphicon-chevron-left"></i>');
    $('.owl-next').html('<i class="glyphicon glyphicon-chevron-right"></i>');


});    