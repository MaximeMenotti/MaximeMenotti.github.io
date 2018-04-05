jQuery(function($) {
    var current_pages=0, pageNum, nbWeeks, pageElement, pageNumber, reviews, week, pannel, displayNumberReview = 4, currentPage, currentPageIndex;
    $(document).ready(function() {
        nbWeeks = $('.weeks > .week').length;
        if(nbWeeks > 1) {
            for (var i = 1; i <= nbWeeks; i++) {
                if (i === 1 || i === nbWeeks) {
                    $(".menu > ul").append('<li><a href="#w' + i + '">' + 'SEMAINE ' + i + '</a></li>');
                }
                else {
                    $(".menu > ul").append('<li><a href="#w' + i + '">' + i + '</a></li>');
                }
            }
        }
        else {
            $(".menu > ul").append('<li class="alone"><a href="#w' + 1 + '">' + 'SEMAINE ' + 1 + '</a></li>');
        }

        $('.menu a').click(function(evt) {
            scrollToPosition(evt);
        });

        //paginate();

        $('.mobile .week').hide();
        $('.week:first-child').fadeIn(300);
        $('#week-select').change(function () {
            $('.mobile .week').hide();
            week = $("#" + $('#week-select').val());
            week.fadeIn(300);
        });

        $('.container-advice').hide();

        $('.accordion').click(function (evt) {
            pannel = $(evt.currentTarget).next();
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
            $('.container-program').fadeOut(300, function() {
                $('.container-advice').fadeIn(300);
            });

            $('.link-list a').removeClass('active');
            $(this).addClass('active');
            return false;
        });

        $('#program-link').on('click', function(e){
            e.preventDefault();
            $('.container-advice').fadeOut(300, function() {
                $('.container-program').fadeIn(300);
            });

            $('.link-list a').removeClass('active');
            $(this).addClass('active');
            return false;
        });
        reviews = $('.container-reviews > .container-review');
        reviews.each(function () {
            console.log($(this).index());
            if ($(this).index() >= displayNumberReview) {
                $(this).hide();
            }
        });

        pageNumber = Math.ceil(reviews.length / displayNumberReview);
        if(pageNumber > 1) {
            $('.container-reviews > .pagination').show();
            for(var j = 1; j <= pageNumber; j++){
                $('.container-reviews > .pagination > ul').append("<li>"+ j +"</li>");
            }
        }
        pageElement = $('.container-reviews > .pagination > ul > li');
        pageElement.first().addClass('active');
        pageElement.click(function () {
            pageNum = $(this).index();
            if(!$(this).hasClass('active')) {
                $('.container-reviews > .pagination > ul > li').removeClass('active');
                $(this).addClass('active');
                displayReviewPage(pageNum);
            }
        });

        $('.container-reviews > .pagination > .previous').click(function () {
            currentPage = $('.container-reviews > .pagination > ul > li.active');
            currentPageIndex = currentPage.index();
            if(currentPageIndex > 0) {
                currentPage.removeClass('active');
                $('.container-reviews > .pagination > ul > li').eq(currentPageIndex - 1).addClass('active');
                displayReviewPage(currentPageIndex - 1);
            }
        });

        $('.container-reviews > .pagination > .next').click(function () {
            currentPage = $('.container-reviews > .pagination > ul > li.active');
            currentPageIndex = currentPage.index();
            if(currentPageIndex < pageNumber-1) {
                currentPage.removeClass('active');
                $('.container-reviews > .pagination > ul > li').eq(currentPageIndex + 1).addClass('active');
                displayReviewPage(currentPageIndex + 1);
            }
        });

        function displayReviewPage(page){
            reviews.hide();
            delay = 100;
            reviews.slice(page*displayNumberReview, page*displayNumberReview + displayNumberReview).each(function(){
                $(this).css({'display':'block', 'opacity':'0'});
                $(this).delay(delay).animate({opacity: '1'}, 400);
                delay += 100;
            });
        }
    });
});