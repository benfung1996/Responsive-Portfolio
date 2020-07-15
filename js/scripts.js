/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // mailto

    // Add class to mailto link
    // Needed to separate the disabling of the default action AND copy email to clipboard
    $('a[href^=mailto]').addClass('mailto-link');

    var mailto = $('.mailto-link');
    var messageCopy = 'Click to copy email address';
    var messageSuccess = 'Email address copied to clipboard';

    mailto.append('<span class="mailto-message"></span>');
    $('.mailto-message').append(messageCopy);

    // Disable default action (opening your email client. yuk.)
    $('a[href^=mailto]').click(function () {
        return false;
    })

    // On click, get href and remove 'mailto:'
    // Store email address in a variable.
    mailto.click(function () {
        var href = $(this).attr('href');
        var email = href.replace('mailto:', '');
        copyToClipboard(email);
        $('.mailto-message').empty().append(messageSuccess);
        setTimeout(function () {
            $('.mailto-message').empty().append(messageCopy);
        }, 2000);
    });


    // Grabbed this from Stack Overflow.
    // Copies the email variable to clipboard
    function copyToClipboard(text) {
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute('value', text);
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
    }

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
