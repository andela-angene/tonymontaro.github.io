$(document).ready(function(){
    
    //Page Loader
    $("body").imagesLoaded(function(){
        $(".page-loader div").fadeOut();
        $(".page-loader").delay(200).fadeOut("slow");

    });
    
    
    //nav scroll snippet
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
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

    //AJAX MAILER
    $(function() {
        $("#send_mail").click(function() {
        	if($('#name').val() == ""){
                alert('Please enter your Name');
                return;
            }
            if($('#email').val() == ""){
                alert('Please enter your E-mail');
                return;
            }
            if($('#phone').val() == ""){
                alert('Please enter your Phone Number');
                return;
            }

            if($("#vinyl").prop('checked') == true){
                var vinyl = "true"
            }else{var vinyl = "false"}
            if($("#dtg").prop('checked') == true){
                var dtg = "true"
                }else{var dtg = "false"}
            if($("#silk").prop('checked') == true){
                var silk = "true"
                }else{var silk = "false"}
            if($("#embroid").prop('checked') == true){
                var embroid = "true"
                }else{var embroid = "false"}
            
            var data = {
                name: $("#name").val(),
                
                vinyl: vinyl,
                dtg: dtg,
                silk: silk,
                embroid: embroid,
                email: $("#email").val(),
                phone: $("#phone").val(),
                message: $("#message").val(),
                send_mail: $("#send_mail").val(),
            }
            $.ajax({
                type: "POST",
//                url: "send_mail.php",
                url: "http://montaroweb.com/hosted/minty/send_mail.php",
                data: data,
                complete: function(data){
                    $("#email").val('');
                    $("#phone").val('');
                    $("#message").val('');
                    $("#name").val('');
                    $("#vinyl").prop('checked', false);
                    $("#dtg").prop('checked', false);
                    $("#silk").prop('checked', false);
                    $("#embroid").prop('checked', false);
                    $('#thank-you').modal();
                }
            });

        });
    });
    
    
    //calculate mobile-minty height and pad nav
    var mobileLogoH = $('.mobile-minty').height() + 15;
    $('.navbar-toggle').css('margin-top', mobileLogoH + 'px');
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll == 0){
            $('.navbar-toggle').css('margin-top', mobileLogoH + 'px');
        }else{
            $('.navbar-toggle').css('margin-top', '30px');
        }
    });
    
    //Close navmenu after click
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
    
});