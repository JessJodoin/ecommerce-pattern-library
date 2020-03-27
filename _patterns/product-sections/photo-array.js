var hideAllSlides = function () {
  $('.slide').css('display', 'none');
};

$('.tab-btn').on('click', function () {
  var id = $(this).attr('href');

  hideAllSlides();
  $(id).css('display', 'block');
});
