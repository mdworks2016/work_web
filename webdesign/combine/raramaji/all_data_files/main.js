$(window).bind('load', function() {

  // Initial wowjs
  wow = new WOW({
    animateClass: 'animated',
    callback: function(box) {
      var getAttr = box.getAttribute("id");
      if (getAttr == 'near-section-02-vimeo') {
        setTimeout(function() {
          $('#section-02-vimeo').css('opacity', 1);
          section2Vimeo.play();
        }, 1000);
      }
      if (getAttr == 'near-section-05-vimeo') {
        setTimeout(function() {
          $('#section-05-vimeo').css('opacity', 1);
          section5Vimeo.play();
        }, 1000);
      }
    }
  });
  wow.init();

  setTimeout(function() {
    $('body').addClass('character-scroll-visible');
    $('.scroller .item').css('display', 'block');
  }, 3000);

  setTimeout(function() {
    $('.second, .page-sub-system [class*="section-0"] .container, .page-sub-about [class*="section-0"] .container').css('opacity', '1');
  }, 100);

  // Hide all image before and show them after .5s
  setTimeout(function() {
    $('.first img, .cat, .ads, #particle').css('opacity', '1');
    $('.scroller .item').css('display', 'none');
  }, 500);

  // Character hover
  // $('.list-character .item').each(function() {
  //   var self = $(this);
  //   var bgImage = self.attr('data-hover');

  //   if(bgImage) {
  //     self.hover(function() {
  //       $('.page-character').css('background-image', 'url(' + bgImage + ')');
  //     });
  //   }
  // });

  // Hover image move parallax
  if($('#parallax-effect').length > 0) {
    $('#parallax-effect').mouseParallax({ moveFactor: 2 });
  }
  if($('#parallax-effect-04').length > 0) {
    $('#parallax-effect-04').mouseParallax({ moveFactor: 3 });
  }
  if($('#parallax-effect-07').length > 0) {
    $('#parallax-effect-07').mouseParallax({ moveFactor: 3 });
  }
  if($('#parallax-effect-06').length > 0) {
    $('#parallax-effect-06').mouseParallax({ moveFactor: 3 });
  }
  if($('#parallax-effect-08').length > 0) {
    $('#parallax-effect-08').mouseParallax({ moveFactor: 3 });
  }
});
