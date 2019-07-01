$(function(){
    var width=$(".carimg").innerWidth();
    
    var animationSpeed=800;
    var pause=1000;
    var currentSlide=1;
    var $slider =$(".slider");
    var $sliderContainer = $slider.find(".slides");
    var $slides =$sliderContainer.find(".slide");
    var interval;
    var $c=$(".col");
    
    $("#rightbtn").click(function(){
        // if(margin-left > "0" && margin-left < "-100")
            //alert(width);
            
            var width=$(".carimg").innerWidth();
            $sliderContainer.animate({"margin-left":"-="+width},animationSpeed);
            
            currentSlide++;
        });
    $("#leftbtn").click(function(){
            //alert(width);
            
           
                var width=$(".carimg").innerWidth();
                $sliderContainer.animate({"margin-left":"+="+width},animationSpeed);
                currentSlide--;
                
            //startSlider();
          
        });
        function stopSlider(){
            clearInterval(interval);
        }
    function startSlider()
    {
        
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
                var width=$(".carimg").innerWidth();
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

    
    $c.on("mouseenter",stopSlider).on("mouseleave",startSlider);
    $("#leftbtn").on("mouseenter",stopSlider).on("mouseleave",startSlider);
    $("#rightbtn").on("mouseenter",stopSlider).on("mouseleave",startSlider);
    startSlider();
});
