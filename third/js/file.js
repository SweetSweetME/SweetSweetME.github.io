// JavaScript Document
window.onload = function(){
	
	
	var file_value = "";
	$("#filename").change(function(){
		file_value = $("#filename")[0].value;
		$("#filebtn").text(file_value);
	});


}