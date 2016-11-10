$(document).ready(function() {

  console.log('jQuery loaded');

  $caro_box = $('#carousel_box');
  console.log('$caro_box: ', $caro_box);
  $caro_list = $('#carousel_ul');
  console.log('$caro_list: ', $caro_list);
  $caro_slides = $caro_list.find('li');
  $arrow_r = $('#right_scroll');
  $arrow_l = $('#left_scroll');

  /* write script to config the carousel's dimensions here */

  // move the last list item before the first item. The purpose of this is if the user clicks previous he will be able to see the last item.
  $('#carousel_ul li:first').before($('#carousel_ul li:last'));

  /* set/get values */
  var index = 1; // starting index
  var slide_wid = $caro_slides.outerWidth(); // width of slide
  var caro_len = $caro_slides.length; // array length
  var caro_wid = slide_wid * caro_len;
  // var left_offset = 0;
  var left_offset = 0 - (slide_wid * index);

  /* log values */
  // console.log('index : ', index);
  // console.log('slide_wid: ', slide_wid);
  // console.log('caro_len: ', caro_len);
  // console.log('caro_wid: ', caro_wid);
  // console.log('left_offset: ', left_offset);

  makeActive(index);

  //when user clicks the image for sliding right
  $arrow_r.click(function(e){

    console.group(e.target.id);
    console.log('starting index: ', index);

    //calculate the new left indent of the unordered list
    var indent = (left_offset) - slide_wid;
    // console.log('indent: ', indent);

    if (index === (caro_len-1)) {
      index = 0;
    } else {
      index++;
    }
    console.log('ending index: ', index);

    //make the sliding effect using jquery's anumate function '
    $caro_list.animate({'left' : indent},500,"swing",function(){

      /* when sliding to right -- move the first item to AFTER the last position */
      $('#carousel_ul li:last').after($('#carousel_ul li:first'));
      consoleMap();

      /* set the left indent of the list to the default */
      $caro_list.css({'left' : left_offset+'px'});

    });

    makeActive(index);
    console.groupEnd();

  });

  //when user clicks the image for sliding left
  $arrow_l.click(function(e){

    console.group(e.target.id);
    console.log('starting index: ', index);

    /* same as for sliding right except that it's current left indent + the item width (for the sliding right it's - slide_wid) */
    var indent = (left_offset) + slide_wid;
    // console.log('indent: ', indent);

    if (index === 0) {
      index = (caro_len-1);
    } else {
      index--;
    }
    console.log('ending index: ', index);

    $caro_list.animate({'left' : indent},500,"swing",function(){

      /* when sliding to left -- move the last item to BEFORE the first position */
      $('#carousel_ul li:first').before($('#carousel_ul li:last'));
      consoleMap();

      /* set the left indent of the list to the default */
      $caro_list.css({'left' : left_offset+'px'});

    });

    makeActive(index);
    console.groupEnd();

  });

  // $arrow_r.click();

  function consoleMap () {
    console.log('$caro_list.find(\'li\').map(...): ', $caro_list.find('li').map(function() {return this.id;}).get());
  }

  function makeActive (index) {
    $caro_slides.removeClass('active');
    $caro_slides.eq(index).addClass('active');
  }

});
