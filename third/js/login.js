// JavaScript Document
window.onload = function(){
	
	
	var oRegister = document.getElementById('register');
	var oTo_login = document.getElementById('to_login');
	var oTo_register = document.getElementById('to_register');
	
	oTo_register.onclick = function(){
		startMove(oRegister,{top: -480});
	}
	oTo_login.onclick = function(){
		startMove(oRegister,{top: 0});
	}

	$('input[name=telphone]').data('d',0);
	$('input[name=email]').data('d',0);
	$('input[name=password]').data('d',0);
	$('input[name=repassword]').data('d',0);

	$('input[name=telphone]').blur(function(){
		if( this.value == '' ){
			alert('电话不能为空');
			$(this).data('d',0);
		}else if( !(/^1[34578]\d{9}$/.test(this.value)) ){
			alert('电话号码格式不对');
			$(this).data('d',0);
		}else{
			$(this).data('d',1);
		}
	});
	$('input[name=email]').blur(function(){
		if( this.value == '' ){
			alert('邮箱不能为空');
			$(this).data('d',0);
		}else if( !(/^\w+@(qq.com|163.com|126.com|163.net)$/.test(this.value)) ){
			alert('邮箱格式不对');
			$(this).data('d',0);
		}else{
			$(this).data('d',1);
		}
	});
	$('input[name=password]').blur(function(){
		if( this.value == '' ){
			alert('密码不能为空');
			$(this).data('d',0);
		}else if( !(/^[0-9a-z]{6,20}$/.test(this.value)) ){
			alert('密码格式不对，字母小写加数字长度不小于6位不超过20位');
			$(this).data('d',0);
		}else{
			$(this).data('d',1);
		}
	});
	$('input[name=repassword]').blur(function(){
		if( this.value != $('input[name=password]')[0].value ){
			alert('两次输入的密码不一样');
			$(this).data('d',0);
		}else{
			$(this).data('d',1);
		}
	});

	$('#registerForm').submit(function(){
		var dTotal = 0;
		$('.login_info').blur();
		$('.login_info').each(function(){
			dTotal+=$(this).data('d');
		});

		if( !$('input[name=checkbox]')[0].checked ){
			alert('请勾选拾题网用户使用协议');
			$('input[name=checkbox]').data('d',0);
			dTotal+=$('input[name=checkbox]').data('d');
		}else{
			$('input[name=checkbox]').data('d',1);
			dTotal+=$('input[name=checkbox]').data('d');
		}
		if( dTotal!=5 ){
			return false;
		}
	});

	$('#loginForm').submit(function(){
		return false;
	});

}