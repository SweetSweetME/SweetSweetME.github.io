$(function(){

	
	//精品提炼淡出
	$(".quality").animate({
		'top': 0,
		'opacity': 1
	},1000);
	setTimeout(function(){
		$(".comment").animate({
			'top': 0,
			'opacity': 1
		},1000);
	},600);



	// 精品提炼移入移出效果
	var obj_fade,obj_fade2;
	var timer_fade = null,timer_fade2 = null;
	$(".quality .thumbnail").each(function(){

		/*
		未解决！！此方法不合适，无法触发
		
		// 这个代码防止出现bug,鼠标动太快,捕捉不到鼠标离开,不能触发事件
		clearTimeout(timer_fade2);
		obj_fade2 = $(this);
		timer_fade2 = setTimeout(function(){
			obj_fade2.css({
				'box-shadow': 'none'
			});
		},2000);
		// 这个代码防止出现bug,鼠标动太快,捕捉不到鼠标离开,不能触发事件
		*/
	
		$(this).mouseenter(function(){
			// alert(1);
			$(".quality .thumbnail").css({
				'box-shadow': 'none',
				top: '0px'
			});

			// 以上代码处理思想：首先全部清除，再单独设置样式~
			
			$(this).css({
				'box-shadow': '0px 0px 5px 1px #a1a1a1'
			});
			$(this).animate({
				top: '-10px'
			},"slow");
			// console.log($(this));   // $(this) 是thumbnail
		});
		$(this).mouseleave(function(){
			// alert(1);
			clearTimeout(timer_fade);
			obj_fade = $(this);
			timer_fade = setTimeout(function(){
				obj_fade.css({
					'box-shadow': 'none'
				});
				// console.log(obj_fade);  // obj_fade 是thumbnail
				// console.log($(this));   // $(this) 是window
			},300);
			$(this).animate({
				top: '0'
			},"slow");
		});
	});
	// /**/精品提炼移入移出效果

	// 收藏
	$(".quality .quality_love").each(function(){
		$(this).data('flag',false);
	});

	$(".quality .quality_love").each(function(){
		$(this).click(function(){
			if( !$(this).data('flag') ){
				var count = parseInt($(this).text()) + 1;
				$(this).html(count);
				$(this).css({'backgroundImage':'url(images/likeRed.png)'});
				$(this).data('flag',true);
			}else{
				var count = parseInt($(this).text()) - 1;
				$(this).html(count);
				$(this).css({'backgroundImage':'url(images/love.png)'});
				$(this).data('flag',false);
			}
			
		});
	});


});