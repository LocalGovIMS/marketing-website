var win = $(window);

$(".c-header").prepend('<div class="c-header__nav-switch"><div class="c-header__nav-switchBar1"></div><div class="c-header__nav-switchBar2"></div><div class="c-header__nav-switchBar3"></div></div>');

$(".c-header__nav-switch").click(function(event) {
  $(".c-header__nav-switch").toggleClass("c-header__nav-switch--open");
  $(".c-header__nav").toggleClass("c-header__nav--open")
});

win.scroll(function(event) {
  if (win.scrollTop() > 0) {
    $(".c-header").addClass("c-header--opaque");
  }
  else {
    $(".c-header").removeClass("c-header--opaque");
  }
});