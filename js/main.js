$(document).ready(function(){
  // jQuery goes here
  $(".close, .hamburger").click(function(e){
     e.preventDefault();
     $("nav ul").toggleClass('open-nav');
   });
});
