window.onload = function(){
	
	function getColor(){
		var r = parseInt(Math.random()*255).toString(16);
		var g = parseInt(Math.random()*255).toString(16);
		var b = parseInt(Math.random()*255).toString(16);
		// console.log('#' + r + g + b);
		return '#' + r + g + b;
	}

	var oFirst = document.getElementsByClassName('first')[0];
	var oH1 = oFirst.getElementsByTagName('h2')[0];
	var oA1 = oH1.getElementsByTagName('a')[0];
	// oA1.style.color = getColor();

	var oSecond = document.getElementsByClassName('second')[0];
	var oH2 = oSecond.getElementsByTagName('h2')[0];
	var oA2 = oH2.getElementsByTagName('a')[0];
	// oA2.style.color = getColor();
	// 
	
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

		}
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