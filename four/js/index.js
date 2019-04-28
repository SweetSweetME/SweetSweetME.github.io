$(function(){

	//轮播
	var timer = null;
	clearInterval(timer);
	var ImgArr = ['images/banner1.jpg','images/banner2.jpg','images/banner3.jpg'];
	var num = 0;
	function fn1(){
		$(".circle div").attr({
			'class': ''
		});
		if(num == 2){
			num = 0;
		}else{
			num++;
		}
		$("#autoImg")[0].src = ImgArr[num];
		$(".circle div")[num].className = 'active';
	}
	timer = setInterval(function(){
		fn1();
	},1400);
	$("#prev").click(function(){
		clearInterval(timer);
		$(".circle div").attr({
			'class': ''
		});
		if(num == 0){
			num = 2;
		}else{
			num--;
		}
		$("#autoImg")[0].src = ImgArr[num];
		$(".circle div")[num].className = 'active';
		timer = setInterval(function(){
			$(".circle div").attr({
			'class': ''
			});
			if(num == 2){
				num = 0;
			}else{
				num++;
			}
			$("#autoImg")[0].src = ImgArr[num];
			$(".circle div")[num].className = 'active';
		},1400);
	});
	$("#next").click(function(){
		clearInterval(timer);
		fn1();
		timer = setInterval(function(){
			fn1();
		},1400);
	});
	
	//点赞
	$(".love").each(function(){
		$(this)[0].flag = true;
		$(this).click(function(){
			if($(this)[0].flag){
				$(this)[0].flag = !$(this)[0].flag;
				$(this).html('赞 ' + (parseInt($(this).html().split(' ')[1])+1));
			}else{
				$(this)[0].flag = !$(this)[0].flag;
				$(this).html('赞 ' + (parseInt($(this).html().split(' ')[1])-1));
			}
			
		});
	});

	//选项卡
	$(".tab button").each(function(index){
		$(this).mouseenter(function(){
			$(".tab button").each(function(){
				$(this)[0].className = '';
			});
			$(this)[0].className = 'active';
			$(".detail").each(function(){
				$(this)[0].style.display = 'none';
			});
			$(".detail")[index].style.display = 'block';
		});
	});

	//文化
	var timer2 = null;
	var lastNum;
	clearInterval(timer2);
	setInterval(function(){
		if(lastNum==-1200){
			$(".culture .box div")[0].style.marginLeft = 0 + 'px';
			lastNum = 0;
		}
		lastNum = parseInt($(".culture .box div")[0].style.marginLeft.split('px')[0]);
		$(".culture .box div")[0].style.marginLeft = (lastNum - 20) + 'px';
		// alert(lastNum);
	},140);
	

});