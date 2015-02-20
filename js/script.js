$(document).ready(function(){
  $('.slider4').bxSlider({
	  	auto: true,
		slideWidth: 240,
		minSlides: 1,
		maxSlides: 4,
		moveSlides: 1,
		slideMargin: 10,
		autoHover: true,
		onSlideAfter: function(){
			$(".detail li").css("display","none");
			var sIndex = $("a.bx-pager-link.active").parent().index();
			$(".detail li").eq(sIndex).addClass("iActive").siblings().removeClass('iActive');
			$(".detail li.iActive").fadeIn();
		},
  });
 
});