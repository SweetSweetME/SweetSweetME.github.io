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
	// 
	// 导航样式处理
	var flagList = true;
	$("#xs_list_btn").on("click",function(){
		if(flagList){
			$("#lines").hide();
			$("#times").show();
			flagList = !flagList;
		}else{
			$("#lines").show();
			$("#times").hide();
			flagList = !flagList;
		}

	});
	// 
	// 
	var allLi = $("#lk_nav li");
	$("#headerLogo").on("click", function(){
		$("html,body").animate({scrollTop: $("#lk_header").offset().top}, 800);
	});;

	$(allLi[0]).on("click", function(){
		$("html,body").animate({scrollTop: $("#lk_about").offset().top - 71}, 800);
	});
	$(allLi[1]).on("click", function(){
		$("html,body").animate({scrollTop: $("#lk_product").offset().top - 71}, 800);
	});
	$(allLi[2]).on("click", function(){
		$("html,body").animate({scrollTop: $("#lk_hot").offset().top - 71}, 800);
	});
	$(allLi[3]).on("click", function(){
		$("html,body").animate({scrollTop: $("#lk_hot").offset().top - 71}, 800);
	});

	//导航栏定到最上面
	function getScrollTop(){  
	    var scrollTop=0;  
	    if(document.documentElement&&document.documentElement.scrollTop){  
	        scrollTop=document.documentElement.scrollTop;  
	    }else if(document.body){  
	        scrollTop=document.body.scrollTop;
	        // alert(1);
	    }  
	    return scrollTop;  
	}

	var oNavList = document.getElementById('navList');
	var aLi = oNavList.getElementsByTagName('li');
	var listFixed = document.getElementById('listFixed');

	if(document.body.offsetWidth<450){

		listFixed.className = 'navbar navbar-default navbar-fixed-top navbar_lk';
		$("#lk_carousel")[0].style.marginTop = 70 + 'px';


		$("#headerLogo").on("click", function(){
			$("html,body").animate({scrollTop: $("#lk_header").offset().top - 71}, 400);
		});;
		$(allLi[1]).on("click", function(){
			$("html,body").animate({scrollTop: $("#lk_product").offset().top - 71}, 400);
		});
		$(allLi[2]).on("click", function(){
			$("html,body").animate({scrollTop: $("#lk_hot").offset().top - 71}, 400);
		});
		$(allLi[3]).on("click", function(){
			$("html,body").animate({scrollTop: $("#lk_link").offset().top - 71}, 400);
		});


		document.onscroll = function(){
			var scrollTop = getScrollTop();
			if( scrollTop<20 ){
				aLi[0].className = 'active hidden-xs';
			}else if( scrollTop > 20&&scrollTop < 400 ){
				for( var i=0; i<aLi.length; i++ ){
					aLi[i].className = '';
					if(i==0||i==4||i==5){
						aLi[i].className = 'hidden-xs';
					}
				}
				aLi[1].className = 'active';
			}else if( scrollTop > 400&&scrollTop < 800 ){
				for( var i=0; i<aLi.length; i++ ){
					aLi[i].className = '';
					if(i==0||i==4||i==5){
						aLi[i].className = 'hidden-xs';
					}
				}
				aLi[2].className = 'active';
			}else if( scrollTop > 800&&scrollTop < 1200 ){
				for( var i=0; i<aLi.length; i++ ){
					aLi[i].className = '';
					if(i==0||i==4||i==5){
						aLi[i].className = 'hidden-xs';
					}
				}
				aLi[3].className = 'active';
			}
		}
	}else{

		$("#headerLogo").on("click", function(){
			$("html,body").animate({scrollTop: $("#lk_header").offset().top}, 800);
		});;

		$(allLi[0]).on("click", function(){
			$("html,body").animate({scrollTop: $("#lk_about").offset().top - 71}, 800);
		});
		$(allLi[1]).on("click", function(){
			$("html,body").animate({scrollTop: $("#lk_product").offset().top - 71}, 800);
		});
		$(allLi[2]).on("click", function(){
			$("html,body").animate({scrollTop: $("#lk_hot").offset().top - 71}, 800);
		});
		$(allLi[3]).on("click", function(){
			$("html,body").animate({scrollTop: $("#lk_link").offset().top - 71}, 800);
		});


		document.onscroll = function(){
			var scrollTop = getScrollTop();
			if( scrollTop<20 ){
				aLi[0].className = 'active';
				listFixed.className = 'navbar navbar-default navbar-static-top navbar_lk';
			}else if( scrollTop > 160&&scrollTop < 500 ){
				listFixed.className = 'navbar navbar-default navbar-fixed-top navbar_lk';
				for( var i=0; i<aLi.length; i++ ){
					aLi[i].className = '';
				}
				aLi[0].className = 'active';
				// 固定定位也有top值
			}else if( scrollTop > 500&&scrollTop < 1000 ){
				listFixed.className = 'navbar navbar-default navbar-fixed-top navbar_lk';
				for( var i=0; i<aLi.length; i++ ){
					aLi[i].className = '';
				}
				aLi[1].className = 'active';
			}else if( scrollTop > 1000&&scrollTop < 1500 ){
				listFixed.className = 'navbar navbar-default navbar-fixed-top navbar_lk';
				for( var i=0; i<aLi.length; i++ ){
					aLi[i].className = '';
				}
				aLi[2].className = 'active';
			}else if( scrollTop > 1500&&scrollTop < 2200 ){
				listFixed.className = 'navbar navbar-default navbar-fixed-top navbar_lk';
				for( var i=0; i<aLi.length; i++ ){
					aLi[i].className = '';
				}
				aLi[3].className = 'active';
			}
		}
	}

	

	// console.log(document.body.offsetWidth);






});