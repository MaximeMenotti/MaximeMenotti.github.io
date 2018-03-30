jQuery(function($) {
    var current_pages = 0;

    function scrollToPosition(evt) {
        evt.preventDefault();
        var target = $(evt.currentTarget).attr('href');
        console.log(target);
        $('html, body').animate({
            scrollTop: $(target).offset().top - 20
        }, 'slow');
    }

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

    $(document).ready(function() {
        for(var i = 1; i < 33; i++){
            console.log("test");
            $(".menu").append('<li><a href="#w'+i+'">' + i +'</a></li>');
        }

        $('.menu a').click(function(evt) {
            scrollToPosition(evt);
        });

        console.log($('.menu li').length);
        paginate();
    });

    function paginate() {
        if($('.menu li').length > 10) {
            $('.menu li').each(function( index ) {
                if(index >= current_pages + 10 || index < current_pages) {
                    $(this).displaynone();
                }
                else {
                    $(this).display();
                }
                console.log(current_pages + " - " + $('.menu li').length);

                if(current_pages === 0) {
                    $('.button-prev').setHidden();
                }
                else {$('.button-prev').setVisible();}
                if(current_pages+10 >= $('.menu li').length) {
                    $('.button-next').setHidden();
                }
                else {$('.button-next').setVisible();}
            });
        }
    }

    $('.button-next').on('click', function(){
        current_pages = current_pages + 10;
        paginate();
    });

    $('.button-prev').on('click', function(){
        current_pages = current_pages - 10;
        if(current_pages < 0) current_pages = 0;
        paginate();
    });

    $(window).on('ready resize scroll', function() {
        $('.week > p, .week .brick, .teaser').each(function() {
            if ($(this).isInViewport()) {
                $(this).setVisible();
            }
        });
    });

    $(window).on('load', function() {
        $('.desktop .week > p, .desktop .week .brick, .teaser').each(function () {
            if (!$(this).isInViewport()) $(this).setHidden();
        });
    });

    $(document).ready(function() {
        $('.mobile .week').displaynone();
        $('.week:first-child').display();
        $('#week-select').change(function () {
            $('.mobile .week').displaynone();
            var week = $("#" + $('#week-select').val());
            week.display();
        });
    });

    $('#conseil-link').on('click', function(e){
        e.preventDefault();
        $('.container-program').displaynone();
        $('.container-advice').display();

        $('.link-list a').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $('#program-link').on('click', function(e){
        e.preventDefault();
        $('.container-advice').displaynone();
        $('.container-program').display();

        $('.link-list a').removeClass('active');
        $(this).addClass('active');
        return false;
    });
});