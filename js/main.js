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
    navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ]
});

// Chatbot form submission handler
document.getElementById('chatbot-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var input = document.getElementById('chatbot-input');
    var message = input.value;
    input.value = '';

    if (message.trim()) {
        addMessage('user', message);
        setTimeout(function() {
            var reply = getBotResponse(message);
            addMessage('bot', reply);
        }, 500); // Simula un pequeño retraso antes de que el bot responda
    }
});

// Function to add messages to the chatbot
function addMessage(sender, message) {
    var messagesContainer = document.getElementById('chatbot-messages');
    var messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = sender === 'bot' ? 'bot-message' : 'user-message'; // Aplica clases diferentes
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Function to generate bot responses based on input
function getBotResponse(input) {
    // Respuestas simples basadas en palabras clave
    if (/hola/i.test(input)) return '¡Hola! ¿Cómo puedo ayudarte?';
    if (/precio/i.test(input)) return 'Nuestros precios varían dependiendo del servicio.';
    if (/adios/i.test(input)) return '¡Gracias por visitarnos!';
    if (/horario/i.test(input) || /hora/i.test(input) ||/atención/i.test(input)) return 'Atendemos de lunes a jueves de 9 a 17 hrs en Beauchef 851, Santiago Centro.';
    if (/dirección/i.test(input) ||/direccion/i.test(input) ||/ubicacion/i.test(input) ||/ubican/i.test(input) ||  /ubicación/i.test(input)) return 'Estamos ubicados en Beauchef 851, Santiago Centro.';
    if (/servicio/i.test(input) ||/servicios/i.test(input) || /ofrecen/i.test(input) || /hacen/i.test(input)) {
        return 'Ofrecemos varios servicios de jardinería: \n' +
               '- Paisajismo Sostenible: Diseñamos y construimos jardines que respetan el entorno natural.\n' +
               '- Poda de Plantas: Respetamos los ciclos naturales para fomentar su crecimiento y salud óptimos.\n' +
               '- Riego y Drenaje: Implementamos sistemas de riego eficientes.\n' +
               '- Mantenimiento de Jardines: Cuidado continuo para tus espacios verdes.\n' +
               '- Tecnología Verde: Incorporamos tecnologías avanzadas para tus proyectos.\n' +
               '- Jardinería Urbana: Convertimos espacios urbanos en áreas verdes, mejorando la calidad del aire.';
    }
    if (/contacto/i.test(input) || /teléfono/i.test(input) ||/telefono/i.test(input) || /celular/i.test(input) ||/correo/i.test(input) ||/mail/i.test(input) || /comunicar/i.test(input)) {
        return 'Puedes contactarnos a través del teléfono +56912345678 o por correo electrónico a contacto@jardinesecologicos.com.';
    }
    if (/pedido/i.test(input) || /estado/i.test(input) || /envío/i.test(input)|| /envio/i.test(input)) {
        return 'Si realizaste un pedido en las últimas 24 horas, encontrarás la información sobre el despacho en tu correo electrónico registrado. Si tienes más dudas, puedes llamarnos al +56912345678.';
    }

    // Respuesta por defecto
    return 'Lo siento, no entiendo la pregunta. ¿Puedes ser más específico?';
}

})(jQuery);