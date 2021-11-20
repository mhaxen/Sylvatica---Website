// title events

$(".home").mouseenter(
  function(){
  $(".home").animate({
    width: "100%"
  });
});

$(".home").mouseleave(
  function(){
  $(".home").animate({
    width: "80%"
  });
});

$(".navtitle").click(
  function(){
  $(this).css("color", "red");
  setTimeout(function () {
    $(".navtitle").css("color", "white");
  }, 10);

  $("#" + this.parentNode.id + " .togglable-section").slideToggle("slow");
});
