jQuery(function($) {
    $('.accordion').click(function (evt) {
      var pannel = $(evt.currentTarget).next();
      if (pannel.is(':hidden')) {
        pannel.slideDown('slow');
        pannel.parent().toggleClass('active');
      } else {
        pannel.slideUp('slow');
        pannel.parent().removeClass('active');
      }
    });

    $('.menu a').click(function(evt) {
        scrollToPosition(evt);
    });
  
    function scrollToPosition(evt) {
        evt.preventDefault();
        var target = $(evt.currentTarget).attr('href');
        console.log(target);
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 'slow');
    }
    
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    
    $(window).on('ready resize scroll', function() {
        $('.week > p, .week .brick, .teaser').each(function() {
            if ($(this).isInViewport()) {
                $(this).setVisible();
            }
        });
    });

    $(window).on('load', function() {
        $('.week > p, .week .brick, .teaser').each(function () {
            if (!$(this).isInViewport()) $(this).setHidden();
        });
    });

    $('#conseil-link').on('click', function(e){
        e.preventDefault();
        $('.container-program').undisplay();
        $('.container-advice').display();

        $(this).addClass('active');
        $('#program-link').removeClass('active');
        return false;
    });

    $('#program-link').on('click', function(e){
        e.preventDefault();
        console.log("hey");
        $('.container-advice').undisplay();
        $('.container-program').display();

        $(this).addClass('active');
        $('#conseil-link').removeClass('active');
        return false;
    });

    $.fn.undisplay = function () {
        $(this).addClass('displaynone');
        $(this).removeClass('display');
    };

    $.fn.display = function () {
        $(this).addClass('display');
        $(this).removeClass('displaynone');
    };

    $.fn.setVisible = function () {
        $(this).addClass('visible');
        $(this).removeClass('hidden');
    };

    $.fn.setHidden = function () {
        $(this).addClass('hidden');
        $(this).removeClass('visible');
    };
});