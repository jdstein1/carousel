$(document).ready(function() {

  console.log('jQuery loaded - settings.js');

  console.log('$caro_box width: ', $caro_box.width());
  console.log('$caro_box height: ', $caro_box.height());

  $options_wid = $('#options_width');
  var options_wid_val = $caro_box.width();
  $options_wid.val( options_wid_val );

  $options_uni = $('#options_units');
  var options_uni_val = 'px';

  $options_sub = $('#options_submit');

  $('#options').hide();

  // slide_wid = options_wid_val/3;

  // $options_sub.hide();

  $options_wid.change(function(e){
    console.log('change width: ', this.value);
    options_wid_val = this.value;
    console.log(String(options_wid_val) + String(options_uni_val));
    // $caro_box.width( String(options_wid_val) + String(options_uni_val) );
  });

  $options_uni.change(function(e){
    console.log('change units: ', this.value);
    options_uni_val = this.value;
    console.log(String(options_wid_val) + String(options_uni_val));
    // $caro_box.width( String(options_wid_val) + String(options_uni_val) );
  });

  $options_sub.click(function(e){
    console.log('click submit');
    console.log('change $caro_box.width: ', $caro_box.width());
    console.log(String(options_wid_val) + String(options_uni_val));
    $caro_box.width( String(options_wid_val) + String(options_uni_val) );
    left_offset = options_wid_val/3;
    
    // $caro_slides.each( function () {
    //   console.log('$(this)', $(this));
    //   $(this).find('img').width(options_wid_val/3);
    //   console.log('$(this).find(\'img\').css(\'width\')', $(this).find('img').css('width'));
    // });

    // console.log('$caro_box.css(\'width\'): ', $caro_box.css('width'));
  });

});
