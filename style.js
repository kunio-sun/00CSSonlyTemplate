

jQuery(document).ready(function ($) {

  // aタグスクロール
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var headerHeight = $(".header").height() + 16;
    $("html, body").animate({ scrollTop: position - headerHeight }, 500, "swing");
    return false;
  });

  // scroll top
  $('h1').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500, "swing")
  })

});

