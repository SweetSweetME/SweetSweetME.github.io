$(function(){


	// 收藏
	$("#collect button").each(function(){
		$(this).data('flag',false);
	});

	$("#collect button").each(function(){
		$(this).click(function(){
			if( !$(this).data('flag') ){
				var count = parseInt($(this).children().text()) + 1;
				$(this).children().html(count);
				$(this).css({'backgroundImage':'url(../images/likeRed.png)'});
				$(this).data('flag',true);
			}else{
				var count = parseInt($(this).children().text()) - 1;
				$(this).children().html(count);
				$(this).css({'backgroundImage':'url(../images/like.png)'});
				$(this).data('flag',false);
			}
			
		});
	});

	// 清空
	$(".question_btn_del").click(function(){
		$("#ques_edit").val('');
	});


});