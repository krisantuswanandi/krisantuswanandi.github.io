$(function(){
	//early animation
	$(".health-fill").viewportChecker({
		classToRemove: 'empty',
		offset: 50
	});
	
	//bind event
	$(".tes").on("click", function(){
		var top = $("#" + $(this).attr("data-target")).offset().top + 20;
		$("body").animate({scrollTop: top});
	});
});