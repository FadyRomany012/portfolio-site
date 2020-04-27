$("document").ready(function() {
  // hidden load section on load
  $(".load").toggleClass("d-none d-flex")
// start scroll to sections
  $(".nav-link,p").click(function() {
      $("body,html").animate({
           scrollTop: $(`#${$(this).data("scroll")}`).offset().top -  95
        
      },500)
  })
// start scroll to sections
// start add class active
  $(window).scroll(function() {
      $(".scrol").each(function() {
        if ($(window).scrollTop() >= $(this).offset().top -  95) {
            $(".nav-link").removeClass("active")
            $(`.nav-link[data-scroll="${$(this).attr('id')}"]`).addClass("active")
        }
      })
      // start progress function 
       if ($(window).scrollTop() >= $(".skils").offset().top -  95) {
           $(".progres-width").each(function() {
               $(this).animate({
                width:`${$(this).data("width")}`
               },500)
           })
       } 
       // end progress function
  })
// start add class active

    // start hide outline from buttons
    $("button").click(() =>  {
        $("button").css("outline","none")
     })
     // end hide outline from buttons
     // start hide popup
    $(".fa-times").click(function() {
       $(this).parent().parent().toggleClass("d-none d-flex")
       $("body").css("overflow","auto")
    })
      // end hide popup
       
  
})
//  strat show popup
function showPopup(cl) {
      $(cl).toggleClass("d-none d-flex")
      $("body").css("overflow","hidden")
   }
     //  end  showpopup