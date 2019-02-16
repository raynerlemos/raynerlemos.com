$(function(){

    // PLUGIN PARTICLES
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'assets-js/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });

    AOS.init({
        startEvent: 'DOMContentLoaded',
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease-in-out'
    });

    var lastScroll = 0;
    $(window).scroll(function(){
        // setTimeout(function() { //give them a second to finish scrolling before doing a check
            var scroll = $(window).scrollTop();
            if (scroll > lastScroll + 30) {
                $(".Header").addClass("inScroll");
            } else if (scroll < lastScroll - 30) {
                $(".Header").removeClass("inScroll");
            }
            lastScroll = scroll;
        // }, 1000);
    });


    $('.Skills_Ferramentas_List').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

});


