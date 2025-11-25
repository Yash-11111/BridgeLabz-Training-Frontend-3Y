// Q4 banner controls and rotation
$(function(){
  const $banners = $('#banners .banner');
  $('#hide').on('click', ()=> $banners.hide());
  $('#show').on('click', ()=> $banners.show());
  $('#slide').on('click', ()=> $banners.slideToggle());
  $('#fade').on('click', ()=> $banners.fadeToggle());

  // Auto rotate banners every 5 seconds
  let idx = 0;
  setInterval(()=>{
    $banners.fadeOut(500);
    $banners.eq(idx).fadeIn(500);
    idx = (idx + 1) % $banners.length;
  }, 5000);
});