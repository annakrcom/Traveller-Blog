



 $(function() {

    var width = 1436;                                // number of pixels to move on
    var animationSpeed = 1000;                   
    var pause = 5000;                                // frequency of slide changing
    var currentSlide = 1;

    //caching DOM elements to avoid re-selecting each time

    var $slider = $('#slider');                      //div which holds all slider stuff inside
    var $slideContainer = $('.slides', $slider);     //ul, holds all slides inside, is animated.
    var $slides = $('.slide', $slider);              //li , single slide

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();  

    
// functions to activate slider arrows

    $(".button-prev").click(function(){
   
        var $margin = $('.slides').css('margin-left');
        var $currentMargin = parseInt($margin);
        var $maxMargin = ($('.slide').length - 2) * (-1436) ;

            if ($currentMargin < 0) {
                $slideContainer.css('margin-left', '+=1436px');
            } else {
                $slideContainer.css('margin-left', $maxMargin + 'px');
            }   
    });

    $(".button-next").click(function(){

        var $margin = $('.slides').css('margin-left');
        var $currentMargin = parseInt($margin);
        var $maxMargin = ($('.slide').length - 2) * (-1436) ;

            if ($currentMargin == $maxMargin) {
                $slideContainer.css('margin-left', '0px');
            } else {
                $slideContainer.css('margin-left',  '-=1436px');
            }   
    });


});

