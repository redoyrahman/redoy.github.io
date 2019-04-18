jQuery(document).ready(function () {
    $('.main-menu').meanmenu({
        meanScreenWidth: "992",
        meanRevealPosition: "left",
        meanMenuContainer: '.mobile-menu-active'
    });

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            300,
            'linear'
        )
    });
});