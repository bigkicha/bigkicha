   $(document).ready(function() {
      $('#mmenu').mmenu({
         navbar:{
            title: "LOGO"
         }
      });

      var dataMmenu = $('#mmenu').data("mmenu");

      dataMmenu.bind('open:finish', function(){
         $('.hamburger').addClass('is-active');
      }).bind('close:finish', function(){
         $('.hamburger').removeClass('is-active');
      });

   });