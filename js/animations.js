$(window).scroll(onScrollCahnge);

onScrollCahnge();

function onScrollCahnge() {
  let scroll = $(window).scrollTop();
  if (scroll < 2000) {
    // $('.home__background').parallax({speed:0.5});
    $(".home__background").css(
      $(window).width() < 900 ? { top: scroll / 1.1 } : { top: scroll / 1.5 }
    );
    $(".home .phone").css({ top: scroll / 2 });
    $(".phone__glare").css({ height: 200 + scroll / 5 });
    // console.log(200+((scroll - $(".phone__glare").position().top)));
    // console.log($(".phone__glare").position().top);
    if (scroll > 1000) {
      $(".header__background").css({ opacity: 1 });
    } else if (scroll > 750) {
      $(".header__background").css({ opacity: (scroll - 750) / 300 });
    } else {
      $(".header__background").css({ opacity: 0 });
    }
  }
}
