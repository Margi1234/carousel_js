// $(document).ready(() =>  {
//     // $("#rightbtn").click(() => {
//     //     $("#img1").fadeOut();
//     // });
//     $("#slider .slides").animate({"margin-left": "-200%"},2000);
// });


$(function(){
    var width=100;
    var animationSpeed=1000;
    var pause=3000;
    //setting interval
    setInterval(function(){
        $(".slider .slides").animate({"margin-left":"-=100%"},animationSpeed)
    },pause);
    //stopping if it is last slide

});











