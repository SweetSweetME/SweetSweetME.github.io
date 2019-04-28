$(function(){

	$("#add").click(function(){
		console.log(parseInt($("#num").text())+1);
		$("#num").text(parseInt($("#num").text())+1);
		$("#money").text('￥' + (300 * parseInt($("#num").text())).toFixed(2));
	});

	$("#sub").click(function(){
		if(parseInt($("#num").text())==0){
			$("#num").text('0');
		}else{
			// console.log(parseInt($("#num").text())-1);
			$("#num").text(parseInt($("#num").text())-1);
			$("#money").text('￥' + 300 * parseInt($("#num").text()) + '.00');
		}
		
	});
	

});