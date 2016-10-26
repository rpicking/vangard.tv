(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 45)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    /* Closes the Responsive Menu on Menu Item Click
    //$('.navbar-collapse ul li a').click(function() {
    //    $('.navbar-toggle:visible').click();
    });*/

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 200
        }
    });

    // Start carousel and tooltip
    $(function() {
        $('#myCarousel').carousel();
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Open modal after clicking on image
    $(function() {
        $('.pop').on('click', function() {
            $('#imagepreview').attr('src', $(this).find('img').attr('src'));
            $('#myModalLabel').text($(this).find('img').attr('alt'))
            $('#imagemodal').modal('show');
        });
    });

    // Copy to clipboard button for calendar
    $('#copy-cal-btn').tooltip();
    $('#copy-cal-btn').bind('click', function() {
        var input = document.querySelector('#copy-calendar');
        input.setSelectionRange(0, input.value.length + 1);
        try {
            var success = document.execCommand('copy');
            if (success) {
                $('#copy-cal-btn').trigger('copied', ['Copied!']);
            } else {
                $('#copy-cal-btn').trigger('copied', ['Copy with Ctrl-c']);
            }
        } catch (err) {
            $('#copy-cal-btn').trigger('copied', ['Copy with Ctrl-c']);
        }
    });
    $('#copy-cal-btn').bind('copied', function(event, message) {
        $(this).attr('title', message)
            .tooltip('fixTitle')
            .tooltip('show')
            .attr('title', "Copy to Clipboard")
            .tooltip('fixTitle');
    });


})(jQuery); // End of use strict

// Show the progress bar 
    NProgress.start();

    // Increase randomly
    var interval = setInterval(function() { NProgress.inc(); }, 1000);        

    // Trigger finish when page fully loaded
    jQuery(window).load(function () {
        clearInterval(interval);
        NProgress.done();
    });

    // Trigger bar when exiting the page
    jQuery(window).unload(function () {
        NProgress.start();
    });