if(function(e){e.mark={jump:function(i){var t={selector:"a.scroll-on-page-link"};return"string"==typeof i&&(t.selector=i),i=e.extend(t,i),e(i.selector).click(function(i){var t=e(this),a=t.attr("href"),o=1e3,s=e(a).offset().top;e("html,body").animate({scrollTop:s},o,"swing"),i.preventDefault()})}}}(jQuery),jQuery(function(){jQuery.mark.jump()}),$("body").hasClass("privacy")||$("body").hasClass("faq")){var elementPosition=$(".affixed").offset();$(window).scroll(function(){$(window).scrollTop()>elementPosition.top?$(".affixed").addClass("is-affixed"):$(".affixed").removeClass("is-affixed")})}$(function(){var e=$(".card--trigger");e.on("click",function(e){var i=$(".card--trigger.is-active");e.preventDefault(),i.removeClass("is-active"),$(this).addClass("is-active")})});