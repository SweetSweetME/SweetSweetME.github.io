$(function(){

	/*
		*给列表分别添加自定义属性
	 */
	$("#sort span").each(function(index){
		$(this)[0].index = index;
	});
	/*
		*将分类的信息添加到数组里
	 */
	var infoArr = [[],['长板','Kids儿童板','护具','入门级专业整板','小鱼板（刷街板）','工具'],
					['7层板板面','8层板板面','阴阳竹板面','468整板','558整板','小鱼板-刷街板','Mini-J整板','长板','四件套护具','轴承/砂纸','599整板'],
					['滑板轴承','砂纸','板面'],
					['板面','小鱼板-刷街板','整板','砂纸'],
					['Donut','Peer'],
					['抱枕','滑板包','Psychos','礼盒']];

	$("#sort span").not('.first').mouseenter(function(){
		//右面显示
		$(".sort_right").show(500);
		//初始化左边列表
		$("#sort span").each(function(i){
			if(i == 0){
				$(this)[0].style.background = '#ffa501';
			}else{
				$(this)[0].style.background = 'transparent';				
			}
		});
		//鼠标移上后选中的效果
		$(this)[0].style.background = 'rgba(0,0,0,.8)';
		//清空原来的信息
		$(".sort_right ul").empty();
		//增加结点添加内容
		for( var i=0; i<infoArr[$(this)[0].index].length; i++ ){
			var oLi = $('<li>').text(infoArr[$(this)[0].index][i]);
			$(".sort_right ul").append(oLi);
		}
	});
	//鼠标到左边内容依旧显示
	$(".sort_right").mouseenter(function(){
		$(this).show(500);
	});

	$('.sort').mouseleave(function(){
		//初始化左边列表
		$("#sort span").each(function(i){
			if(i == 0){
				$(this)[0].style.background = '#ffa501';
			}else{
				$(this)[0].style.background = 'transparent';				
			}
		});
		$(".sort_right").hide(500);
	});
	

});