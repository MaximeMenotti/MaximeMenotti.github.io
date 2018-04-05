function scrollToPosition(evt) {
    evt.preventDefault();
    var target = $(evt.currentTarget).attr('href');
    console.log(target);
    $('html, body').animate({
        scrollTop: $(target).offset().top-20
    }, 600);
}