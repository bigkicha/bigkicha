		(function($){ //create closure so we can safely use $ as alias for jQuery

			$(document).ready(function(){

			});

		})(jQuery);


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    animateOut: 'slideOutLeft',
    animateIn: ' ',
  	items:1,
    nav:true,
    navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
    loop:true, 
    autoplay:true, 
    autoplayTimeout: 10000,
  });
});
var header = new Headhesive('.top-container');


$(document).ready(function() {
      $("#my-menu").mmenu({
         // options
      }, {
         // configuration
         offCanvas: {
            pageNodetype: "section"
         }
      });
   });