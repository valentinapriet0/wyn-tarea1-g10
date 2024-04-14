(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Función del Chatbot
    window.toggleChatbot = function() {
        const chatbotPopup = document.getElementById('chatbotPopup');
        if (chatbotPopup.style.display === 'none' || chatbotPopup.style.display === '') {
            chatbotPopup.style.display = 'block';
            document.getElementById('chatbotButton').textContent = 'Cerrar Chat';
        } else {
            chatbotPopup.style.display = 'none';
            document.getElementById('chatbotButton').textContent = 'Chat';
        }
    };

    window.selectQuestion = function(question) {
        const chatbotContent = document.getElementById('chatbotContent');
        let response = "";
    
        if (question === 'servicios') {
            response = 'Ofrecemos asesoramiento e instalación de trabajos de jardinería sustentable. Para un presupuesto, por favor <a href="contact.html">contáctanos</a>.';
        } else if (question === 'plantas') {
            response = 'Si no tienes jardín, no te preocupes. Visita nuestra sección de <a href="plants.html">plantas</a> que puedes comprar directo de nuestro vivero.';
        } else if (question === 'ubicacion') {
            response = 'Estamos ubicados en Av. Beauchef 851, Santiago Centro. Atendemos de lunes a jueves de 9 a 16 hrs.';
        } else if (question === 'pedido') {
            response = 'Para saber dónde se encuentra tu pedido, por favor contacta a <a href="mailto:contacto@jardinesecologicos.com">contacto@jardinesecologicos.com</a>.';
        } else if (question === 'ayuda') {
            response = 'Si necesitas más ayuda, puedes llamar a nuestros asistentes al +56912345678.';
        }
    
        // Update the inner HTML to show the response and the option to ask another question
        chatbotContent.innerHTML = `<p>${response}</p>
                                    <p>¿Necesitas algo más?</p>
                                    <button class="chatbot-option" onclick="selectQuestion('servicios')">Servicios de jardinería sustentable</button>
                                    <button class="chatbot-option" onclick="selectQuestion('plantas')">Comprar plantas de nuestro vivero</button>
                                    <button class="chatbot-option" onclick="selectQuestion('ubicacion')">Dónde estamos ubicados</button>
                                    <button class="chatbot-option" onclick="selectQuestion('pedido')">Estado de tu pedido</button>
                                    <button class="chatbot-option" onclick="selectQuestion('ayuda')">Necesitas más ayuda</button>`;
    };    
    
})(jQuery);