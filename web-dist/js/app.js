$(document).ready(function () {


    // Selecting some DOM elements for further handling

    var dom = {
        window: $(window),
        body: $('body'),
        navItem: $('.nav-item'),
        navBarLogo: $('.navbar-logo'),
        customerName: $('#name'),
        customerEmail: $('#email'),
        customerMobile: $('#mobile'),
        customerCheckIn: $('#check-in'),
        customerCheckOut: $('#check-out'),
        customerAdults: $('#Adults'),
        customerKids: $('#Kids'),
        customerRooms: $('#Rooms'),
        customerComments: $('#Comments'),
        enquireButton: $('#enquireButton')
    };

    // Handling the navigation links

    dom.navItem.click(function () {
        var scrollElement = $(this).find('.nav-link').data('link'),
            scrollPosition = $(scrollElement).offset().top - 100;

        $('html, body').animate({
            scrollTop: scrollPosition
        }, 500);
    });

    // Displaying the logo at the navigation bar

    dom.window.scroll(function () {

        if (dom.window.scrollTop() >= 300) {
            dom.navBarLogo.addClass('show');
        } else {
            dom.navBarLogo.removeClass('show');
        }
    });

    // Scroll to top on the logo click

    dom.navBarLogo.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

    dom.enquireButton.click(function () {
        console.log(document.getElementById("customerName").value);
        console.log(document.getElementById("customerEmail").value);
        console.log(document.getElementById("customerMobile").value);
        console.log(document.getElementById("customerCheckIn").value);
        console.log(document.getElementById("customerCheckOut").value);
        console.log(document.getElementById("customerAdults").value);
        console.log(document.getElementById("customerKids").value);
        console.log(document.getElementById("customerRooms").value);


        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://35.198.212.244:8080/mail/test"); // false for synchronous request
        xmlHttp.send(null);

    });

    // Promo stuff

    //console.log('Powered by Jekyll Instagram Portfolio Theme');
    //console.log('Project: https://github.com/portfolio-central/jekyll-instagram-portfolio-theme')

    // Instantiate the Bootstrap carousel
    $('.multi-item-carousel').carousel({
        interval: false
    });

    // for every slide in carousel, copy the next slide's item in the slide.
    // Do the same for the next, next item.
    $('.multi-item-carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

    function SendMail(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://35.198.212.244:8080/mail/test"); // false for synchronous request
        xmlHttp.send(null);
    }
});