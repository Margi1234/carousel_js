$(function(){
    var width=1000;
    var animationSpeed=3000;
    var pause=3000;
    var currentSlide=1;
    var $slider =$(".slider");
    var $sliderContainer = $slider.find(".slides");
    var $slides =$sliderContainer.find(".slide");
    var interval;
    if(currentSlide == 1)
    {
                $("#leftbtn").hide();
    }
    $("#rightbtn").click(function(){
        // if(margin-left > "0" && margin-left < "-100")
            //alert(width);
            if(currentSlide != $slides.length)
            {
                $("#leftbtn").show();
            }
            else if(currentSlide == 1)
            {
                $("#leftbtn").hide();
            }
            $sliderContainer.animate({"margin-left":"-="+width},animationSpeed);
            if(currentSlide === $slides.length-1)
            {
                $("#rightbtn").hide();
                //currentSlide=1;
                //$sliderContainer.css("margin-left","0%");
            }
            currentSlide++;
        });
    $("#leftbtn").click(function(){
            //alert(width);
            
            if(currentSlide!=1)
            {
                $("#rightbtn").show();    
                $("#leftbtn").show();
                $sliderContainer.animate({"margin-left":"+="+width},animationSpeed);
                currentSlide--;
                if(currentSlide == 1)
                {
                    $("#leftbtn").hide();
                }
            //startSlider();
            }
        });

    function startSlider()
    {
        $("#leftbtn").show();
        //setting interval
        interval= setInterval(function()
        {
               /* if(currentSlide == 1)
                {
                    $("#leftbtn").hide();
                }
                if(currentSlide != 1)
                {
                    $("#leftbtn").show();
                }
                if(currentSlide == $slides.length)
                {
                    $("#rightbtn").hide();
                }
                if(currentSlide != $slides.length)
                {
                    $("#rightbtn").show();
                }*/
                
                $sliderContainer.animate({"margin-left":"-="+width},animationSpeed,function()
                {
                    currentSlide++;
                    //  console.log(slides.length);
                    //stopping if it is last slide
                    if(currentSlide === $slides.length)
                    {
                            currentSlide=1;
                            $sliderContainer.css("margin-left","0%");
                    }
                })
        },pause);
        
    }

    function stopSlider(){
        clearInterval(interval);
    }
    $slider.on("mouseenter",stopSlider).on("mouseleave",startSlider);
    startSlider();
});
