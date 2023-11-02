// Cuando se cargue la página
$(document).ready(function() {
    // Animación de aparición al hacer scroll
    $(window).scroll(function() {
        $(".fade-in").each(function() {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({ opacity: 1, transform: "translateY(0)" }, 800);
            }
        });
    });

    // Navegación suave al hacer clic en los enlaces del menú
    $(".menu li a").on("click", function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 800);

        // Añadir clase "active" al enlace seleccionado
        $(".menu li a").removeClass("active");
        $(this).addClass("active");
    });
});


var map = L.map('map').setView([41.5554, 2.2609], 13);
var marker = L.marker([41.5554, 2.2609]).addTo(map);



L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);