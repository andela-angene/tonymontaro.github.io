$(document).ready(function () {
    
    //cover images
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        dots: false,
    });
    
    //nav scroll snippet
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            //add active class to the parent li element
            $('.nav-pills li').removeClass('active');
            $(this).parent().addClass('active');
            
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    //Handle active menu
    $('.nav-pills li').click(function() {
        
        $(this).addClass('active');
    });
});