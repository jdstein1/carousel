$(document).ready(function() {

  console.log('jQuery loaded - settings.js');

  $settings_wid = $('#settings_width');
  $settings_uni = $('#settings_units');
  $settings_sub = $('#settings_submit');

  $settings_sub.hide();

  $settings_wid.change(function(e){
    console.log('change width: ', this.value);
  });

  $settings_uni.change(function(e){
    console.log('change units: ', this.value);
  });

  $settings_sub.click(function(e){
    console.log('click submit: ', this.value);
  });

});
