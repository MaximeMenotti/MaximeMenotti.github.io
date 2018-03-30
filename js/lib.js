$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$.fn.displaynone = function () {
    $(this).addClass('display-none');
    $(this).removeClass('display');
};

$.fn.display = function () {
    $(this).addClass('display');
    $(this).removeClass('display-none');
};

$.fn.setVisible = function () {
    $(this).addClass('visible');
    $(this).removeClass('hidden');
};

$.fn.setHidden = function () {
    $(this).addClass('hidden');
    $(this).removeClass('visible');
};

$.fn.slideIn = function () {
    $(this).addClass('slideIn');
};

function scrollToPosition(evt) {
    evt.preventDefault();
    var target = $(evt.currentTarget).attr('href');
    console.log(target);
    $('html, body').animate({
        scrollTop: $(target).offset().top - 20
    }, 'slow');
}