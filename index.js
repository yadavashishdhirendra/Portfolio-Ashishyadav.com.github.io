$(document).ready(function () {
  $("#nav-toggle").click(function () {
    $(".nav-list").toggle();
  });
  $(".slide-header").click(function () {
    $(".nav-dropdown").toggle();
  });


  setTimeout(function () {
    $('#ctn-preloader').addClass('loaded');
    // Una vez haya terminado el preloader aparezca el scroll
    $('body').removeClass('no-scroll-y');

    if ($('#ctn-preloader').hasClass('loaded')) {
      // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
      $('#preloader').delay(1000).queue(function () {
        $(this).remove();
      });
    }
  }, 3000);

  $(window).scroll(function () {
    var positionTop = $(document).scrollTop();
    // console.log(positionTop);

    if ((positionTop > 811) && (positionTop < 900)) {
      $('.cards').addClass('animate__animated animate__pulse animate__slow')
    }
    if ((positionTop > 1206) && (positionTop < 1480)) {
      $('#card').addClass('animate__animated animate__backInLeft animate__slow')
    }
    if ((positionTop > 1530) && (positionTop < 1842)) {
      $('#card2').addClass('animate__animated animate__backInLeft animate__slow')
    }
    if ((positionTop > 1882) && (positionTop < 1997)) {
      $('#card3').addClass('animate__animated animate__backInLeft animate__slower')
    }
    if ((positionTop > 2114) && (positionTop < 2257)) {
      $('#card4').addClass('animate__animated animate__backInLeft animate__slower')
    }
  });
});

