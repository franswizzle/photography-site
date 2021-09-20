//Variable declarations
// var $nav = $('.nav');
let nav = document.querySelector(".nav");

// var $navtext = $(".left-nav");
let navtext = document.querySelector(".left-nav");

// var $navbtn = $(".nav-btn");
let navbtn = document.querySelector(".nav-btn");
// var $logo = $('.center-nav');
let logo = document.querySelector(".center-nav");
// var $classes = [$(".mySlide1"), $(".mySlide2"), $(".mySlide3"), $(".mySlide4"), $(".mySlide5"), $(".mySlide6"), $(".mySlide7"), $(".mySlide8"), $(".mySlide9"), $(".mySlide10"), $(".mySlide11"), $(".mySlide12"), ];


// When you scroll past the nav, elements of the nav (like back ground, font color, and logo change)

document.addEventListener("scroll", (e) => {
    console.log(e);
})

// $(function() {
//     $(document).scroll(function () {
    
        
    
// // Navigation-animation changes
//       $nav.toggleClass('nav-scrolled', $(this).scrollTop() > $nav.height()/10);
//       $navtext.toggleClass('left-nav-scrolled', $(this).scrollTop() > $nav.height()/10);
//       $navbtn.toggleClass('nav-btn-scroll', $(this).scrollTop() > $nav.height()/10);

//       if ($(this).scrollTop() > $nav.height()/10) {
//         $logo.html('<img id="logo" src="images/camera_white.svg">')
        
//     } else {
//         $logo.html(' <img id="logo" src="images/camera-logo-hd-7126.svg">')
//     }

//     });
// });

// Scrolling animations - When you click on the arrow, the page scrolls down to the photos



$( '#arrows a, .nav, .footer-nav' ).click(function(e) {
    e.preventDefault();

  });

    $( '#arrows a, .nav li .photo-btn, .footer-nav li .photo-btn-footer' ).on('click', function(){
        $('html, body').animate({
            scrollTop: $('.photos').offset().top-$nav.height()-20}, 1000);
            return false;
    });

    $( '.nav li .pricing-btn, .footer-nav li .pricing-btn-footer' ).on('click', function(){
        $('html, body').animate({
            scrollTop: $('.pricing').offset().top-$nav.height()-20}, 1000);
            return false;
    });

   

    $( '.photos a' ).click(function(e) {
        e.preventDefault();

        return false;
});

// Modal

// Open the Modal
$(function(e) {
    const $imageText = $(".overlay-text a");

    var $myModal = $("#myModal");

    $imageText.click(function() {$myModal.css('display', 'block')});

});

  // Close the Modal
  $(function(e) {
    const $close = $(".close");
    
    $close.on('click', function () {$("#myModal").css('display', 'none'); 
   
    });
    
    
    return false;
    
  });


   
 //Hide the menus if visible
  $(window).click(function(e) {
   

    
    
    $('#myModal').on('click',function () {$("#myModal").css('display', 'none'); $classes.css('display', 'none'); 
});

});




//Open image
$(function displayImage() {

const $pictureLink = $("picture a");


$pictureLink.click(function(){
    var $index = $pictureLink.index(this);
    $classes[$index].css('display', 'block');

});

});


