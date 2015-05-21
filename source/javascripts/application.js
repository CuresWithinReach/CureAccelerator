//= require 'jquery/dist/jquery.js'
//= require 'picturefill/dist/picturefill.js'
//= require_tree .


$(function () {
  var $card_trigger = $('.card--trigger');
  $card_trigger.on('click', function (e) {
    var is_active = $('.card--trigger.is-active');
    e.preventDefault();
    is_active.removeClass('is-active');
    $(this).addClass('is-active');
  });
});