// Scroll to page anchor
(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') {
        defaults.selector = options;
      }

      options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };
})(jQuery);


jQuery(function(){
  jQuery.mark.jump();
});


// Onscroll fix element
if ($('body').hasClass('privacy') || $('body').hasClass('faq')){
  var elementPosition = $('.affixed').offset();
  $(window).scroll(function(){
    if($(window).scrollTop() > elementPosition.top){
      $('.affixed').addClass('is-affixed');
    } else {
      $('.affixed').removeClass('is-affixed');
    }
  });
}