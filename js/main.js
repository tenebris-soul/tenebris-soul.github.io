$(document).ready(function () {
    var headerActDone = false;

    function scrollObserveForHeader() {
        var currentScroll = $(this).scrollTop();
        var mainVisibilityMax = $('.home').offset().top + $('.home').outerHeight() / 2;

        if(currentScroll > mainVisibilityMax) {
            if(!headerActDone) {
                showHeader(false);
                showChevron(true);
            }

            headerActDone = true;
        }
        else {
            if(headerActDone) {
                showHeader(true);
                showChevron(false);

                needHeaderOpened = false;

                if($(headerButton).hasClass('header__chevron_opened')) 
                    $(headerButton).removeClass('header__chevron_opened');
            }

            headerActDone = false;
        }
    }

    var headerButton = $('.header__chevron');

    function showChevron(condition) {
        if(!condition) {
            if($(headerButton).hasClass('header__chevron_unhidden'))
                $(headerButton).removeClass('header__chevron_unhidden');
        } else {
            if(!$(headerButton).hasClass('header__chevron_unhidden'))
                $(headerButton).addClass('header__chevron_unhidden');
        }
    }

    function chevronShowingHeader() {
        if(needHeaderOpened) {
            if(!$(headerButton).hasClass('header__chevron_opened')) 
                $(headerButton).addClass('header__chevron_opened');
            if($(header).hasClass('header_hidden')) 
                $(header).removeClass('header_hidden');
        } else {
            if($(headerButton).hasClass('header__chevron_opened')) 
                $(headerButton).removeClass('header__chevron_opened');
            if(!$(header).hasClass('header_hidden')) 
                $(header).addClass('header_hidden');
        }
    }

    var needHeaderOpened = false;
    var header = $('.header');

    $(headerButton).click(function (e) { 
        e.preventDefault();
        
        needHeaderOpened = !needHeaderOpened;

        chevronShowingHeader();
    });

    function showHeader(condition) {
        if(condition) {
            if($(header).hasClass('header_hidden')) 
                $(header).removeClass('header_hidden');
        } else {
            if(!$(header).hasClass('header_hidden')) 
                $(header).addClass('header_hidden');
        }
    }

    scrollObserveForHeader();

    $(window).on('scroll', function () {
        scrollObserveForHeader();
    });
});