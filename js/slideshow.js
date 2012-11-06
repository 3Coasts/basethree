(function($) {

	Drupal.behaviors.slideshow = {
		attach: function (context) {
			var ratio = $(".view-id-banner img").height() / $(".view-id-banner img").width();
			console.log(ratio.toFixed(2));
			if($(".view-id-banner").length){
				$(".view-id-banner img").width($("body").width());
			}
			resizeSlideshow(ratio); 
			$(window).resize(function(){ resizeSlideshow(ratio); });
		}
	}

	function resizeSlideshow(ratio){
		clearTimeout(resizeit);
		var resizeit = setTimeout(function(){
			if($(window).width() <= 740){
				$(".view-id-banner img").css({"width": $("body").width(), "height": $("body").width() * ratio});
				$(".view-id-banner").css({"height": $("body").width() * ratio});
			}else{
				if($(window).width() >= 740){
					$(".view-id-banner img").css({"width":"960px","height":"300px"});
					$(".view-id-banner").css({"height": "300px"});
				}else{
					$(".view-id-banner img").css({"width":"720px","height":"225px"});
					$(".view-id-banner").css({"height": "225px"});
			}
			}
		},100);					
	}
})(jQuery);