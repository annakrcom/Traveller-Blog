
 $(function() {

    var width = 1436;                               
    var animationSpeed = 1000;                   
    var pause = 5000;                               
   

    //caching DOM elements to avoid re-selecting each time

    var $slider = $('#slider');             //div which holds all slider stuff inside
    var $slideContainer = $('.slides');     //ul, holds all slides inside, is animated.
    var $slides = $('.slide');              //li , single slide
    var interval;


    var $maxMargin = ($('.slide').length - 2) * (-1 * width) ;


    function arrowButtons(){
       
        
        $(".button-prev").click(function(){
            var $margin = parseInt($('.slides').css('margin-left'));
            if ($margin < 0) {
                $slideContainer.css('margin-left', '+=' + width + 'px');
            } else {
                $slideContainer.css('margin-left', $maxMargin + 'px');
            } 
        });
        $(".button-next").click(function(){
            var $margin = parseInt($('.slides').css('margin-left'));
            if ($margin <= $maxMargin) {
                $slideContainer.css('margin-left', '0px');
            } else {
                $slideContainer.css('margin-left',  '-=' + width + 'px');
            } 
        });

    }
    arrowButtons();

    function startSlider(){
        interval = setInterval(function(){
            $slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function(){
                var $margin = parseInt($('.slides').css('margin-left'));
                if ($margin <= ($maxMargin - width)) {
                $slideContainer.css('margin-left', '0px');
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

    



});

