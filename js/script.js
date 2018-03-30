jQuery(function($) {
    var current_pages = 0;
    $(document).ready(function() {
        for(var i = 1; i < 30; i++){
            console.log("test");
            $(".menu").append('<li><a href="#w'+i+'">' + i +'</a></li>');
        }

        $('.menu a').click(function(evt) {
            scrollToPosition(evt);
        });

        console.log($('.menu li').length);
        //paginate();

        $('.mobile .week').displaynone();
        $('.week:first-child').display();
        $('#week-select').change(function () {
            $('.mobile .week').displaynone();
            var week = $("#" + $('#week-select').val());
            week.display();
        });

        $('.accordion').click(function (evt) {
            var pannel = $(evt.currentTarget).next();
            if (pannel.is(':hidden')) {
                pannel.slideDown('0.3s');
                pannel.parent().toggleClass('active');
            } else {
                pannel.slideUp('0.3s');
                pannel.parent().removeClass('active');
            }
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

    });

    /*function paginate() {
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
    });*/
});