// JavaScript for Themezinho
(function($) {
$(document).ready(function() {
	"use strict";
	
		
	// HAMBURGER MENU
		$(".hamburger").click(function() {
		$(".top-menu").toggleClass("top-animate");
		$(".mid-menu").toggleClass("mid-animate");
		$(".bottom-menu").toggleClass("bottom-animate");
		$("body").toggleClass("move-body");
	});
	
	
	// PAGE TRANSITION
		$('.transition').on('click', function(e) {
      	$('.transition-overlay').toggleClass("show-me");
	    });
		
		
	// TRANSITION DELAY 
		$('.transition').on('click', function(e) {
    	e.preventDefault();                  
    	var goTo = this.getAttribute("href"); 
		setTimeout(function(){
         window.location = goTo;
    	},1000);       
		});
		
		
	// FOOTER ZINDEX
		$(window).scroll(function() {
		$(".footer").removeClass("zindex");
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
		   //you are at bottom
		   $(".footer").addClass("zindex");
		}
		});
		
		
	// DROPDOWN
		$(".dropdown-link").click(function(){
        $(this).next(".dropdown-box").slideToggle("fast");
        });


});
		
		
	// WOW ANIMATIONS
		wow = new WOW(
      	{
       		animateClass: 'animated',
        	offset:       50
      	}
    	);
    	wow.init();
		
})(jQuery);