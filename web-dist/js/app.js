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

        isFormValid = false;

        console.log('Inside Submit Function');
        console.log(document.getElementById("customerName").value);
        console.log(document.getElementById("customerEmail").value);
        console.log(document.getElementById("customerMobile").value);
        console.log(document.getElementById("customerCheckIn").value);
        console.log(document.getElementById("customerCheckOut").value);
        console.log(document.getElementById("customerAdults").value);
        console.log(document.getElementById("customerKids").value);
        console.log(document.getElementById("customerRooms").value);


        name = document.getElementById("customerName").value;
        email = document.getElementById("customerEmail").value;
        mobile = document.getElementById("customerMobile").value;
        checkin = document.getElementById("customerCheckIn").value;
        checkout = document.getElementById("customerCheckOut").value;
        adults = document.getElementById("customerAdults").value;
        kids = document.getElementById("customerKids").value;
        rooms = document.getElementById("customerRooms").value;

        alertMessage = [];

        if (name.length === 0) {
            alertMessage.push("Please enter a valid name");
        }
        if (email.length === 0) {
            alertMessage.push("Please enter a valid email iD");
        }
        if (mobile.length === 0) {
            alertMessage.push("Please enter a valid mobile number");
        }
        if (checkin.length === 0) {
            alertMessage.push("Please enter your check-in date");
        }
        if (checkout.length === 0) {
            alertMessage.push("Please enter your check-out date");
        }
        if (adults.length === 0) {
            alertMessage.push("Please specify the number of adults needing accommodation");
        }
        if (kids.length === 0) {
            alertMessage.push("Please specify the number of kids needing accommodation");
        }
        var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regEmail.test(email) == false){
            alertMessage.push("Please enter a valid email id");
        }
        if(mobile.length != 10){
            alertMessage.push("Please enter a valid 10 digit mobile number");
        }
        if(checkin >= checkout){
            alertMessage.push("Checkout date should be after the checkin date");
        }
        /*var todayDate = new Date();
        todayDate = todayDate.getDate - 1;
        console.log(todayDate.toISOString().slice(0,10));
        if(checkin < todayDate || checkout < todayDate){
            alertMessage.push("Checkin/Checkout date should be after the current date");
        }*/


        alertText = "";

        if (alertMessage.length > 0) {
            for (i = 0; i < alertMessage.length; i++) {
                alertText = alertText + '\n\r' + (i + 1).toString() + '.\xa0' + alertMessage[i];
            }
            alert(alertText);
        } else {
            isFormValid = true;
        }

        if (isFormValid) {
            alert("Thank-you for opting to stay with us!\xa0 A confirmation mail has been sent to " +email+ ".\xa0 We will get in touch with you shortly with details on availability.");
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "http://35.198.212.244:8080/mail/test"); // false for synchronous request
            //xmlHttp.open("GET", "http://127.0.0.1:8080/mail/test"); // false for synchronous request
            xmlHttp.send(null);
        }

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