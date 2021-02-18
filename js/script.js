$(document).ready(function() { /* Jquery code must start like this*/

    /*$('h1').click(function(){
        $(this).css('background-color', '#ff0000')  /* This -- indicates the previous function so in this case h1 || inside css we can change any css property on click*/

        /*var waypoints = $('#handler-first').waypoint(function(direction) {
            notify(this.element.id + ' hit 25% from top of window') 
          }, {
            offset: '25%'
          })*/
          /* For sticky navigation*/
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    })
/* Scroll on Buttons*/
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 500)
    });

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500)
    });
});