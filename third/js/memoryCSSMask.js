// JavaScript Document
window.onload = function(){
	
	$("#memory_Info div a").each(function(){
		$(this).click(function(){
			var str = $(this).text();
			$("#memory_mask div p").text(str);
			$("#memory_mask").show();
		});
	});
	$("#memory_mask div span").click(function(){
		$("#memory_mask").hide();
	});

}