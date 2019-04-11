$(function(){     //闭包

	
	$(window).on("resize", function(){
		// 1.1获取窗口宽度
		var clientW = $(window).width();
		// console.log(clientW);
 
		// 1.2设置临界值
		var isShowBigImage = clientW >= 800;

		// 1.3获取所有的item
		var $allItems = $("#lk_carousel .item");
		// console.log($allItems);
		
		// 1.4遍历
		$allItems.each(function (index, item){    //回调function
			// 1.4.1取出图片的路径
			var src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
			var imgUrl = 'url("' + src + '")';

			// 1.4.2设置背景
			$(item).css({
				backgroundImage: imgUrl
			});

			// 1.4.3设置img标签
			if( !isShowBigImage ){
				var $img = '<img src="' + src + '">';
				$(item).empty().append($img);   //先清空再插入图片
			}else{  //显示大图的情况img标签要去掉
				$(item).empty();
			}
		});

		// 动态处理宽度
		var $ul = $("#lk_product .nav");
		var $allList = $("[role='presentation']", $ul);

		// 遍历
		
		var totalW = 0;
		$allList.each(function(index,item){
			totalW += $(item).width();
		});

		var parentW = $ul.parent().width();

		// 设置宽度
		
		if(totalW > parentW){
			$ul.css({
				width: totalW + 'px'
			});
		}else{
			$ul.removeAttr("style");
		}

		
	});

	$(window).trigger("resize");


	// 工具提示
	$('[data-toggle="tooltip"]').tooltip();



	// 导航处理
	var allLi = $("#lk_nav li");

	$(allLi[2]).on("click", function(){
		$("html,body").animate({scrollTop: $("#lk_hot").offset().top}, 1000);
	});






});