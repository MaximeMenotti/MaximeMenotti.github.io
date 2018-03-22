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
    
    $(window).on('resize scroll', function() {
        $('.week > p, .week .brick').each(function() {
            if ($(this).isInViewport()) {
                $(this).removeClass('hidden');
                $(this).addClass('visible');
            }
        });
    });
    
    $('.week > p, .week .brick').each(function() {
        if(!$(this).isInViewport()) $(this).addClass('hidden');
    });
});