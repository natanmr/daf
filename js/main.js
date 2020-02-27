jQuery(document).ready(function ($) {

    $(".one").trigger('click');

// Nav bar when rolate
 		$(window).on('scroll', function(){
        if($(window).scrollTop>10()){
            $('#navbar').addClass('.rolate');
           }else{
            $('#navbar').removeClass('.rolate');
        }
    })
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    }
}) (jQuery);