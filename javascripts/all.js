/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
!function(t){"use strict";t("body").on("click","a.page-scroll",function(e){var n=t(this);t("html, body").stop().animate({scrollTop:t(n.attr("href")).offset().top-80},1250,"easeInOutExpo")}),t("body").scrollspy({target:".navbar-fixed-top",offset:51}),t(".navbar-collapse ul li a").click(function(){t(".navbar-toggle:visible").click()}),t("#mainNav").affix({offset:{top:100}}),t("#toc").on("click","a",function(e){t(this).addClass("page-scroll")})}(jQuery);