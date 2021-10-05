// Variable declarations
var $nav = $('.nav');

var $navtext = $(".left-nav");

var $navbtn = $(".nav-btn");

var $logo = $('.logo-nav');

const $modalContent = $(".modal-content");

const $body = $("body");

const $hamburgerDivs = $(".nav-icon div");

const $hamburger = $(".nav-icon");

const $mobileNav = $(".nav-right_mobile");

//Force page back to top on reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


$(function() {
    $(document).scroll(function () {
    
        
    
// Navigation-animation changes
    $mobileNav.toggleClass('nav-right_mobile--clicked--scrolled', $(this).scrollTop() > $nav.height()/10);
    $nav.toggleClass('nav-scrolled', $(this).scrollTop() > $nav.height()/10);
    $navtext.toggleClass('left-nav-scrolled', $(this).scrollTop() > $nav.height()/10);
    $navbtn.toggleClass('nav-btn-scroll', $(this).scrollTop() > $nav.height()/10);
      
      
     

      if ($(this).scrollTop() > $nav.height()/10) {
        $logo.html('<img id="logo" src="images/camera_white.svg">');
        $hamburgerDivs.css('background', 'white');
        
        
        
    } else {
        $logo.html(' <img id="logo" src="images/camera-logo-hd-7126.svg">')
        $hamburgerDivs.css('background', 'black');
      
    }

    });
});

//Mobile nav when the hamburger is clicked
$hamburger.click(function() {
    $mobileNav.toggleClass('nav-right_mobile--clicked');
    // console.log("clicked");
});


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
    const $imageText = $("picture a");

    var $myModal = $("#myModal");

    $imageText.click(function() {
        $myModal.css('display', 'block')
        $('body,html').css('overflow','hidden');
        $nav.css('display', 'none')
    });
   

})


   
 //Hide the menus if visible
  $(window).click(function(e) {
   

    
    
    $('#myModal').on('click',function () {
        $("#myModal").css('display', 'none');
        $(".clicked").toggleClass("clicked");
        $("#myModal").css('display', 'none'); 
        $modalContent.empty();
        $('body,html').css('overflow','visible');
        $nav.css('display', 'flex')
});

});




//Open image
$(function displayImage() {

 
    let $pictureLink = $("picture a");


    $pictureLink.click(function(e){
        $clickedPhoto = e.target.classList.add("clicked");
        $(".clicked").clone().appendTo($modalContent);
        
    
});

});


  // Close the Modal
  $(function(e) {
    const $close = $(".close");
    
    $close.on('click', function () {
        $(".clicked").toggleClass("clicked");
        $("#myModal").css('display', 'none'); 
        $modalContent.empty();
        $('body,html').css('overflow','visible');
        $nav.css('display', 'flex')
        
        
        
   
    });
    
    
    return false;
    
  });


