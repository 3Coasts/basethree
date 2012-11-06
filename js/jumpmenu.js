(function($) {

	Drupal.behaviors.jumpmenu = {
		attach: function (context) {
			// JUMP MENU
			if(!$("#menu .jumpmenu").length){
				$("#menu ul.menu").parent().append("<div class='jumpmenu'><select></select></div>");
				$("#menu ul.menu li a").each(function(){
					if($(this).hasClass("active")){
						$("#menu div.jumpmenu select").append("<option value='"+$(this).attr("href")+"' selected='selected'>"+$(this).text()+"</option>")	
					}else{
						$("#menu div.jumpmenu select").append("<option value='"+$(this).attr("href")+"'>"+$(this).text()+"</option>")	
					}
				});
				$("div.jumpmenu select").change(function(){
				    window.location = $(this).attr("value");
				});
			}
		}
	}

})(jQuery);