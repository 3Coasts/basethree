(function($) {

	Drupal.behaviors.jumpmenu = {
		attach: function (context) {
			// JUMP MENU
			if(!$(".main-menu .jumpmenu").length){
				$(".main-menu").parent().append("<div class='jumpmenu'><select></select></div>");
				$(".main-menu li a").each(function(){
					if($(this).hasClass("active")){
						$(".main-menu").parent().find("div.jumpmenu select").append("<option value='"+$(this).attr("href")+"' selected='selected'>"+$(this).text()+"</option>")	
					}else{
						$(".main-menu").parent().find("div.jumpmenu select").append("<option value='"+$(this).attr("href")+"'>"+$(this).text()+"</option>")	
					}
				});
				$("div.jumpmenu select").change(function(){
				    window.location = $(this).attr("value");
				});
			}
		}
	}

})(jQuery);