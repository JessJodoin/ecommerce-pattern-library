var largeScreen = window.matchMedia('(min-width: 38em)');

if (largeScreen.matches) {
  $('#filters').click();
}

$("#filters").on("click" , function() {
  $(this).toggleClass("filter-btn-active");
  $("#filter-buttons").attr('hidden', function(_, attr){ return !attr});
});

$(".filter-btn").on("click" , function() {
  $(this).toggleClass("filter-btn-active");
  $(this).siblings(".filter-links").attr('hidden', function(_, attr){ return !attr});
});
