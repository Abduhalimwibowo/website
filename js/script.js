$(document).ready(function() {
  $('.img-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
    gallery:{
    enabled:true
  }
  // other options
});
});

//owl logo
$(document).ready(function() {
$('#logo').owlCarousel({
    loop:true,
    smartSpeed:4000,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
});

//owl work
$(document).ready(function() {
$('#owl-work').owlCarousel({
    loop:true,
    smartSpeed:4000,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
});

//quotes section
$(document).ready(function() {
$('#customers').owlCarousel({
    loop:true,
    smartSpeed:4000,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
});

//navbar tranition

$(document).ready(function () {
 $(window).scroll(function () {
   var location = $(this).scrollTop();
   if (location < 70) {
   $("nav").removeClass("transparent");
   } else {
    $("nav").addClass("transparent");
    }
  });  
});











