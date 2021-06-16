// お問い合わせまでのスムーズスクロール
jQuery(document).ready(function( $ ){
    jQuery( window ).on( 'scroll', function() {
      if ( 200 < jQuery( this ).scrollTop() ) { // 200px以上スクロールしたら
        jQuery( '#global-nav' ).addClass( 'm_fixed' );
      } else {
        jQuery( '#global-nav' ).removeClass( 'm_fixed' );
      }
    });
        });
    
    jQuery(document).ready(function( $ ){
      
          $('a[href^="#"]').click(function(){
          var speed = 500;
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $("html, body").animate({scrollTop:position}, speed, "swing");
          return false;
        });
      });
    
    