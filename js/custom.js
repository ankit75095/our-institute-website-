
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".main_menu");
const links = document.querySelectorAll(".main_menu li");

hamburger.addEventListener('click', () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

$('.learning-slider1').slick({
  infinite: true,
  speed: 6000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  cssEase: 'linear',
});

$('.learning-slider2').slick({
  autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    arrows: false,
    swipe: false,
    slidesToShow: 6,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    rtl: true
});



$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});


$('#home').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  adaptiveHeight: true,
  
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
        slidesToScroll: 1,
        swipe: false,  
        touchMove: false,
        arrows: false
      }
    }
  ]
});




$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  arrows: false,
  autoplay: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,

      }
    }
  ]
});


const buttons = document.querySelectorAll('.maneg-icon ul li');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

AOS.init({ duration: 1000 });
AOS.init({ disable: "mobile" });




const accordions = document.querySelectorAll('.accordion__item');
accordions.forEach(accordion => {
  const title = accordion.querySelector('.accordion__title');
  const content = accordion.querySelector('.accordion__content');
  title.addEventListener('click', () => {
    if (accordion.classList.contains('active')) {
      accordion.classList.remove('active');
      content.style.maxHeight = '0';
    } else {
      accordions.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion__content').style.maxHeight = '0';
      });
      accordion.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});


$(document).ready(function () {

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 900) {
      $("#scroll-btn").addClass("darkHeader");
    } else {
      $("#scroll-btn").removeClass("darkHeader");
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".header_section").addClass("headr-stickey");
    } else {
      $(".header_section").removeClass("headr-stickey");
    }
  });


});



$(document).ready(function () {
$('.placement-slider').slick({
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  arrows: false,
  cssEase: 'linear',
  

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,

      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        adaptiveHeight: true,

      }
    }
  ]
});
});



$(document).ready(function () {
  $('.list-slide').slick({
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 2500,

        }
      }
    ]
  });
});


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/62ea4a5254f06e12d88cadb3/1g9hj4luo';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();

 // get input field and add 'keyup' event listener
 let searchInput = document.querySelector('.search-input');
 searchInput.addEventListener('keyup', search);

 // get all title
 let titles = document.querySelectorAll('.list-item');
 let searchTerm = '';
 let tit = '';

 function search(e) {
   // get input fieled value and change it to lower case
   searchTerm = e.target.value.toLowerCase();

   titles.forEach((title) => {
     // navigate to p in the title, get its value and change it to lower case
     tit = title.textContent.toLowerCase();
     // it search term not in the title's title hide the title. otherwise, show it.
     tit.includes(searchTerm) ? title.style.display = 'block' : title.style.display = 'none';
   });
 }
 $(document).ready(function () {
    $(".fullscreen").click(function () {
      $("#questions").toggleClass("fullscreenmode")
      $("body").toggleClass("fullhide")
    })
  })