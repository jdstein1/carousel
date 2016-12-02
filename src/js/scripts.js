$(document).ready(function() {

  console.log('jQuery loaded - scripts.js');

  $('#options').load('ajax/options.html', function(response, status, xhr) {
    console.log( 'options: ', status );
  });

  $('#caro_fixed').load('ajax/caro.html', function(response, status, xhr) {
    console.log( 'fixed: ', status );
    runCarousel(this);
  });

  $('#caro_full').load('ajax/caro.html', function(response, status, xhr) {
    console.log( 'full: ', status );
    runCarousel(this);
  });

  function runCarousel (e) {

    console.group('START runCarousel: ', e.id);

    this.$caro_box = $(e);
    // $caro_box = $('.carousel_box');
    console.log('this.$caro_box: ', this.$caro_box);

    this.$caro_list = $(e).find('.carousel_ul');
    console.log('this.$caro_list: ', this.$caro_list);

    this.$caro_slides = $(e).find('.carousel_ul').find('li');
    this.$arrow_r = $(e).find('.right_scroll');
    this.$arrow_l = $(e).find('.left_scroll');

    /*
     * write script to config the carousel's dimensions here
     */

    // move the last list item before the first item. The purpose of this is if the user clicks previous he will be able to see the last item.
    this.$caro_list.find('li:first').before(this.$caro_list.find('li:last'));

    /* set/get values */
    var index = 1; // starting index
    var indent = 0;
    var slide_wid = this.$caro_slides.eq(0).width(); // width of slide
    var caro_len = this.$caro_slides.length; // array length
    var caro_wid = slide_wid * caro_len;
    var left_offset = 0 - (slide_wid); // this offset centers first item in carousel

    /* log values */
    console.log('index : ', index);
    console.log('slide_wid: ', slide_wid);
    console.log('caro_len: ', caro_len);
    console.log('caro_wid: ', caro_wid);
    console.log('left_offset: ', left_offset);

    var intervalAutoScroll;

    function startScroll() {
      intervalAutoScroll = window.setInterval(autoScroll, 2500);
    }

    function autoScroll() {
      // console.group("autoscroll!");
      scrollActionR();
      // console.groupEnd();
    }

    function stopScroll() {
      window.clearInterval(intervalAutoScroll);
    }
    startScroll();

    makeActive(index);

    function scrollActionR () {
      console.group('START scrollActionR');
      console.log('starting index: ', index);

      // calculate the new left indent of the unordered list
      indent = (left_offset) - slide_wid;
      // console.log('indent: ', indent);

      if (index === (caro_len-1)) {
        index = 0;
      } else {
        index++;
      }
      console.log('ending index: ', index);

      // make the sliding effect using jquery's anumate function '
      this.$caro_list.animate({'left' : indent},250,"swing",function(){

        /* when sliding to right -- move the first item to AFTER the last position */
        this.$caro_list.find('li:last').after(
          this.$caro_list.find('li:first')
        );
        // consoleMap();

        /* set the left indent of the list to the default */
        this.$caro_list.css({'left' : left_offset+'px'});

      });
      makeActive(index);
      console.groupEnd();
    }

    function scrollActionL () {
      console.group('START scrollActionL');
      console.log('starting index: ', index);

      /* same as for sliding right except that it's current left indent + the item width (for the sliding right it's - slide_wid) */
      indent = (left_offset) + slide_wid;
      // console.log('indent: ', indent);

      if (index === 0) {
        index = (caro_len-1);
      } else {
        index--;
      }
      console.log('ending index: ', index);

      this.$caro_list.animate({'left' : indent},250,"swing",function(){

        /* when sliding to left -- move the last item to BEFORE the first position */
        this.$caro_list.find('li:first').before(
          this.$caro_list.find('li:last')
        );
        // consoleMap();

        /* set the left indent of the list to the default */
        this.$caro_list.css({'left' : left_offset+'px'});

      });
      makeActive(index);
      console.groupEnd();
    }


    // when user clicks the image for sliding right
    this.$arrow_r.click(function(e){

      stopScroll();

      // console.group('e.target.id: ', e.target.id);

      scrollActionR(e);

      // console.groupEnd();

    });

    //when user clicks the image for sliding left
    this.$arrow_l.click(function(e){

      stopScroll();

      // console.group('e.target.id: ', e.target.id);

      scrollActionL(e);

      // console.groupEnd();

    });

    function consoleMap () {
      console.log('$caro_list.find(\'li\').map(...): ', this.$caro_list.find('li').map(function() {return this.id;}).get());
    }

    function makeActive (index) {
      this.$caro_slides.removeClass('active');
      this.$caro_slides.eq(index).addClass('active');
    }

  /**
   * 

    console.log('$caro_box: ', $caro_box);
    console.log('$caro_box width: ', $caro_box.width());
    console.log('$caro_box height: ', $caro_box.height());

    $options_wid = $('.options_width');
    var options_wid_val = $caro_box.width();
    $options_wid.val( options_wid_val );

    $options_uni = $('.options_units');
    var options_uni_val = 'px';

    $options_sub = $('.options_submit');

    // $('.options').hide();

    // $options_sub.hide();

    $options_wid.change(function(e){
      console.log('change width: ', this.value);
      options_wid_val = this.value;
      console.log(String(options_wid_val) + String(options_uni_val));
    });

    $options_uni.change(function(e){
      console.log('change units: ', this.value);
      options_uni_val = this.value;
      console.log(String(options_wid_val) + String(options_uni_val));
    });

    $options_sub.click(function(e){
      console.log('click submit');
      console.log('change $caro_box.width: ', $caro_box.width());
      console.log(String(options_wid_val) + String(options_uni_val));
      $caro_box.width( String(options_wid_val) + String(options_uni_val) );
      left_offset = options_wid_val/3;
    });

   */
  
  console.groupEnd();

  };

});
