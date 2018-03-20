jQuery(function($) {
    $('.accordion').click(function(evt) {
      var pannel = $(evt.currentTarget).next();
      if (pannel.is(':hidden')) {
        pannel.slideDown('slow');
        $(evt.currentTarget).parent().toggleClass('active');
      } else {
        pannel.slideUp('slow');
        $(evt.currentTarget).parent().removeClass('active');
      }
    });

    $('.menu a').click(function(evt) {
      scrollToPosition(evt);
    });
  
    function scrollToPosition(evt) {
        evt.preventDefault();
        var target = $(evt.currentTarget).attr('href');
        console.log(target)
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 'slow');
    }
})(jQuery);