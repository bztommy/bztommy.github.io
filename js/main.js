// to the to
$(function(){
  $('a[href^=#]').click(function(){
    var speed = 700;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// scroll button
$(function() {
  var box    = $(".sg-menu-wrap");
  var boxTop = box.offset().top;
  $(window).scroll(function () {
	if ($(this).scrollTop() > 530) {
	  box.addClass("fixed");
	} else {
	  box.removeClass("fixed");
	}
  });
});


$(function (){
  $("#sg-sp-menu-button").bind('click', function() {
    $("#sg-sp-menu-wrap").toggleClass("open");
    //console.log('work');
  });
});
