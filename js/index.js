window.onload = function(){

    function circle(id,angle){
    	var canvas = document.getElementById(id);
		var cxt = canvas.getContext("2d");
		//画一个空心圆形  凡是路径图形必须先开始路径，画完图之后必须结束路径
	    //开始新路径
	    cxt.beginPath();
	    //重新设置画笔
	    cxt.lineWidth=40;
	    cxt.strokeStyle="#F9E1B4";
	    cxt.arc(100,100,100,1.5*Math.PI,angle*Math.PI,false);
	    cxt.stroke();
	    //封闭新路径
	    cxt.closePath();
    }
    circle('circle1', 1.9);
    circle('circle2', 2);
    circle('circle3', 0.2);
    circle('circle4', 1.9);
    circle('circle5', 1.85);
    circle('circle6', 0.35);









	//下落
	function ball(op){
		this._init(op);
	}

	ball.prototype = {
		_init: function(option){
			this.width = option.width;
			this.height = option.height;
			this.backgroundColor = option.backgroundColor;
			this.speed = option.speed;

		},
		fly: function(){
			
		}
	};

	var ball = new ball({
		width: 10,
		height: 10,
		backgroundColor: 'red',
		speed: 2
	});

	console.log(ball);

}