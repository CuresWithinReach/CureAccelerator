$(function() {

  var $topbar = $('.topbar');

  // Submenu Active
  $(function () {
    $('.dropdown-trigger').on('click', function (e) {
      e.preventDefault();
      $(this).siblings('.sub-menu').toggleClass('is-active');
    });
  });

  // Mobile Menu
  $(function(){
    $('.js-menu-trigger,.js-menu-screen').on('click touchstart',function(e) {
      e.preventDefault();
      $('.js-menu,.js-menu-screen').toggleClass('is-visible');
    });
  });

});