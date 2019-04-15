$(function(){

	//上方导航栏
	//
	//console.log($("#head_ul li").first().width());
	// 获取下面绿色块的宽度
	/**
	 * 导航栏下面绿色块只有前两个好用，后面失效原因
	 * 二级导航栏里的li起冲突了，一直在获取他们，解决办法：选择器加上'>'
	 */
	var spanW = $("#head_ul>li").first().width();
	// var oHeadLi = document.getElementById('head_ul').getElementsByTagName('li')[0];
	var oHeadLi = $("#head_ul>li.active")[0] || $("#head_ul>li#icon")[0];
	// console.log(oHeadLi);
	var spanLeft = oHeadLi.offsetLeft;
	// alert(spanLeft);
	var liIndex = 0;
	// 不能让liIndex是0，不然默认会变成首页
	liIndex = $("#head_ul>li.active").index();

	var timer = null;
	// console.log(spanLeft);
	



	spanLeft+=15;

	var bianliang = spanLeft;

	$(".head_nav>span").css({width: spanW + 'px', left: spanLeft + 'px'});

	resizeInit();
	$(window).resize(resizeInit);

	function resizeInit(){

		if($(window).width()>=768){

			liActive();
		}else{
			$("#head_ul>li").click(function(){
				$("#head_ul>li").each(function(){
					this.className = '';
				});
				this.className = 'active';
			});
		}

			// console.log($(window).width());
	}

	function liActive(){
		$("#head_ul>li").not('#head_ul #icon').mousemove(function(){

			var spanLeft2 = this.offsetLeft;
			var spanW2 = $(this).width();
			spanLeft2+=15;
			// var yL = spanLeft;

			

			clearInterval(timer);

			// console.log(bianliang);

			timer = setInterval(function(){   // 不用传参

				bianliang = spanLeft2 > bianliang ? bianliang + (spanLeft2-bianliang)*0.1 : bianliang - (bianliang-spanLeft2)*0.1;   // yL-spanLeft2容易出错记得谁减谁

				// if( !(spanLeft2 > yL) ){
				// 	alert(spanLeft2 > yL);      // 这是测试
				// }

				// if( (spanLeft2 > yL ? spanLeft2 - yL : spanLeft2 - yL) <= 0 ){
				// 	yL = spanLeft2;
				// 	alert(1);
				// 	clearInterval(timer);
				// }
				
				if( spanLeft2 == bianliang ){
					clearInterval(timer);
					bianliang = spanLeft2;
				}



				$(".head_nav>span").css({width: spanW2 + 'px', left: bianliang + 'px'});

				


			},5);


			// console.log("进入");
		});

		$("#head_ul>li").not('#head_ul #icon').mousedown(function(){
			// console.log("按下");
			spanLeft = this.offsetLeft;
			spanW = $(this).width();
			// alert( liIndex + ' ' + spanW);
			spanLeft+=15;
			liIndex = $(this).index();
			
			// console.log(liIndex);
		});

		$("#head_ul").mouseleave(function(){
			// console.log("出去");
			
			clearInterval(timer);  // 让它回去，不然鼠标先出去，定时器还在进行
			$(".head_nav>span").css({width: spanW + 'px', left: spanLeft + 'px'});
			

			// console.log($(".head_nav>span").css("width"));
		});


		spanW = $("#head_ul>li").eq(liIndex).width();
		spanLeft = $("#head_ul>li").eq(liIndex)[0].offsetLeft + 15;
		// console.log(liIndex + ' ' + $("#head_ul>li").eq(2).width());
		// console.log($("#head_ul li").eq(liIndex)[0].offsetLeft);
		$(".head_nav>span").css({width: spanW + 'px', left: spanLeft + 'px'});
		// console.log(spanW);
		// console.log($("#head_ul li").not('#head_ul .icon'));

	}

	// /上方导航栏

	// 轮播图

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
		
	});

	$(window).trigger("resize");

	// /轮播图

});