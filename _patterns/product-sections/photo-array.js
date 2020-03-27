var hideAllSlides = function () {
  $('.slide').css('display', 'none');
  $('.tab-btn').removeClass('tab-current');
};

$('.tab-btn').on('click', function () {
  var id = $(this).attr('href');

  hideAllSlides();
  $(id).css('display', 'block');

  $(this).addClass('tab-current')
});
