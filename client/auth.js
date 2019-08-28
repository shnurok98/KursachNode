let tLiveCookies = 600; // в секундах
// console.log('Cookies: ' + document.cookie + '; Время жизни: ' + tLiveCookies);
let locUrl = location.href;
// alert(locUrl);
let i = locUrl.indexOf('?r');
// alert(i);
// alert(locUrl);
if(i != -1){
	locUrl = locUrl.substr(0, i);
}
// alert(locUrl);
if(locUrl != 'file:///C:/workspace/projects/KursachNode/client/login.html'){
	let name = getCookie('user');
	if(name === undefined){
		alert('Доступ запрещен. Вы будете перенаправлены на страницу входа');
		location.assign('login.html');
	}
}

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function logIn(){
	switch($('#login').val()){
		case 'admin':
			if ($('#pass').val() == 'root') {
				// let date = new Date(new Date().getTime() + tLiveCookies * 1000);
				// document.cookie = "user=admin; expires=" + date.toUTCString();
				document.cookie = "user=admin";
				location.assign('index.html');
			}else{
				alert('Неверный пароль!');
			}
			break;
		case 'user': 
			if ($('#pass').val() == '12345') {
				// let date = new Date(new Date().getTime() + tLiveCookies * 1000);
				// document.cookie = "user=user; expires=" + date.toUTCString();
				document.cookie = "user=user";
				location.assign('index.html');
			}else{
				alert('Неверный пароль!');
			}
			break;
		default:
			alert('Такого пользователя не существует!');
	}
}

function logOut(){
	let zeroDate = new Date(0);
	document.cookie = "user=; expires=" + zeroDate.toUTCString();
	location.reload();
}

window.onload = function(){
	
}