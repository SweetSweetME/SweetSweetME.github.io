$(function(){

// 星星
	function star(m,n,k){
		if( m==1 || m==2 || m==3 || m==4 || m==5 ){
			$("#star1 b:lt(" + m + ")").each(function(){
				// console.log($(this).index());
				$(this).css('backgroundPosition','-40px 0');
			});
			// console.log($("#star1 b"));
		}
		// console.log($(".star b"));
		if( n==1 || n==2 || n==3 || n==4 || n==5 ){
			$("#star2 b:lt(" + n + ")").each(function(){
				// console.log($(this).index());
				$(this).css('backgroundPosition','-40px 0');
			});
			// console.log($("#star2 b"));

		}
		if( k==1 || k==2 || k==3 || k==4 || k==5 ){
			$("#star3 b:lt(" + k + ")").each(function(){
				// console.log($(this).index());
				$(this).css('backgroundPosition','-40px 0');
			});
			// console.log($("#star3 b"));

		}
	}
	star(4,3,5);

});