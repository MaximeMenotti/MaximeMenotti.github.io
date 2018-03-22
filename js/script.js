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
    
    $('.week').viewportChecker({
        classToAdd: 'visible',
        classToAddForFullView: 'full-visible', 
        classToRemove: 'hidden',
        removeClassAfterAnimation: true, 
        repeat: true
    });
    $('.week').addClass('hidden');
});