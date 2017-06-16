

document.getElementById("add").addEventListener("click", function(){
	let number1 = document.getElementById("user1").value;
	let number2 = document.getElementById("user2").value;
	document.getElementById("numberResponse").innerHTML = parseInt(number1) + parseInt(number2);
});
document.getElementById("subtract").addEventListener("click", function(){
	let number1 = document.getElementById("user1").value;
	let number2 = document.getElementById("user2").value;
	document.getElementById("numberResponse").innerHTML = number1 - number2;
});
document.getElementById("multiply").addEventListener("click", function(){
	let number1 = document.getElementById("user1").value;
	let number2 = document.getElementById("user2").value;
	document.getElementById("numberResponse").innerHTML = number1 * number2;
});
document.getElementById("divide").addEventListener("click", function(){
	let number1 = document.getElementById("user1").value;
	let number2 = document.getElementById("user2").value;
	document.getElementById("numberResponse").innerHTML = number1 / number2;
});



