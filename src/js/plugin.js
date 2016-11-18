/* plugin.js */

$.fn.carousel = function () {
  console.log('START carousel plugin: ', this);
  this.css("background-color","green");

  $scroll_l = $('<div></div>')
    .addClass("left_scroll")
    .append($('<span></span>')
      .text('left')
    )
  ;

  $scroll_r = $('<div></div>')
    .addClass("right_scroll")
    .append($('<span></span>')
      .text('right')
    )
  ;

  $scroll_list = $('<ul></ul>')
    .addClass('carousel_ul')
  ;

  this.append($scroll_l).append($scroll_r).append($scroll_list);

};

$('#plugin').carousel();