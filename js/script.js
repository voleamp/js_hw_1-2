// Задание 1
function pow(x,n){
	var result = 1;
	for (var i = 0; i < n; i++) {
		result *= x;
	}
	return result;
}

var x = prompt("x?","");
var n = prompt("n?","");

if (n<0) {
	alert('Степень ' + n + ' не поддерживается, введите целую степень, большую 0');
} else {
	alert(pow(x,n));
}

// Задание 2
function checkName(names,username){
	var length = names.length;
	var flag = 0;
	for (var i = 0; i < length; i++) {
		if(names[i] == username){
			flag = 1;
			return flag;
		}else{flag = 0;}
	}
	return flag;
}

var names = [];
for (var i = 0; i < 5; i++) {
	names[i] = prompt("Ввидите имя в массив",'');
}

var username =	prompt("Ввидите имя",'');



if(checkName(names,username)){
	alert( username + ' добро пожаловать');
}else{alert("ошибка входа");}