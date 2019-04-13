window.onload = function(){
	// alert(1);
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
	// alert(scrollTop);
	
	// alert(window.screen.height);
	// alert(window.screen.width);
	// alert(document.body.clientWidth);
	// alert(window.screen.availHeight);
	

	// js获取元素下的第一级子元素
	function getChildren(obj){
	    var objChild = [] ;
	    var objs = obj.getElementsByTagName('*');
	    for(var i=0,j=objs.length; i<j;++i){
	        if(objs[i].nodeType != 1){alert(objs[i].nodeType);
	            continue ;
	        }
	        var temp = objs[i].parentNode;
	        if(temp.nodeType == 1){
	            if(temp == obj){
	                objChild[objChild.length] = objs[i] ;
	            }
	        }else if(temp.parentNode == obj){
	            objChild[objChild.length] = objs[i] ;
	        }
	    }
	    return objChild ;
	}

	var oJump = document.getElementById('jump');
	var oFadeout = document.getElementById('fadeout');
	var oNav = document.getElementById('nav');
	var aA = oNav.getElementsByTagName('a');
	// var aDiv = oJump.getElementsByTagName('div');
	// alert(getChildren(oJump).length);
	var aDiv = getChildren(oJump);

	document.onscroll = function(){
		var scrollTop = getScrollTop();
		if( scrollTop < 500 ){
			oFadeout.style.animation = 'fadein 2s forwards';
			for( var i=0; i<aA.length; i++ ){
				if( i!=3 ){
					aA[i].className = '';
				}
			}
			aA[0].className = 'active';
		}
		if( scrollTop > 300 ){
			oFadeout.style.animation = 'fadeout 2s forwards';
		}
		if( scrollTop > 900 ){
			oNav.style.position = 'fixed';
			oNav.style.zIndex = '100';
			oNav.style.top = '0';
			for( var i=0; i<aA.length; i++ ){
				if( i!=3 ){
					aA[i].className = '';
				}
			}
			aA[1].className = 'active';
			// 固定定位也有top值
		}else if( scrollTop < 750 ){
			oNav.style.position = 'static';
			oNav.style.zIndex = '100';
		}
		if( scrollTop > 1900 ){
			// alert(1);
			aDiv[0].style.visibility = 'visible';
			aDiv[0].style.animation = 'jump 1.2s';
			setTimeout(function(){
				aDiv[3].style.visibility = 'visible';
				aDiv[3].style.transform = 'scale(0)';
			},1100);
			aDiv[3].style.animation = '1s jump 1.2s forwards';
			aDiv[1].style.visibility = 'visible';
			getChildren(aDiv[1])[0].style.animation = 'jump 1.2s';
			getChildren(aDiv[1])[1].style.animation = 'jump 1.2s';
			setTimeout(function(){
				aDiv[2].style.visibility = 'visible';
				getChildren(aDiv[2])[0].style.transform = 'scale(0)';
				getChildren(aDiv[2])[1].style.transform = 'scale(0)';
			},1100);
			getChildren(aDiv[2])[0].style.animation = '1s jump 1.2s forwards';
			getChildren(aDiv[2])[1].style.animation = '1s jump 1.2s forwards';
			for( var i=0; i<aA.length; i++ ){
				if( i!=3 ){
					aA[i].className = '';
				}
			}
			aA[2].className = 'active';
		}
	}

	var oQuote = document.getElementsByClassName('quote')[0];
	var oCircle = document.getElementsByClassName('circle');
	var oQuoteTimer = null;
	var speed = 0;
	function move(){
			oQuote.style.marginLeft = speed + 'px';
			if(speed == -300){
				for( var i=0; i<oCircle.length; i++ ){
					oCircle[i].className = 'circle';
				}
				oCircle[1].className = 'circle about-circle-active';
				speed-=1;
				clearInterval(oQuoteTimer);
				setTimeout(begin,1000);
			}else if(speed == -600){
				for( var i=0; i<oCircle.length; i++ ){
					oCircle[i].className = 'circle';
				}
				oCircle[2].className = 'circle about-circle-active';
				speed-=1;
				clearInterval(oQuoteTimer);
				setTimeout(begin,1000);
			}else if(speed == -900){
				for( var i=0; i<oCircle.length; i++ ){
					oCircle[i].className = 'circle';
				}
				oCircle[0].className = 'circle about-circle-active';
				oQuote.style.marginLeft = 0 + 'px';
				speed = 0;
				clearInterval(oQuoteTimer);
				setTimeout(begin,1000);
			}
			speed-=1;
		}
		function begin(){
			oQuoteTimer = setInterval(move,2);
		}
		begin();
	



	
}