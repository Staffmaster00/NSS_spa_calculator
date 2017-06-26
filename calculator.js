
let calculation = document.getElementById("numberResponse");


function add(x, y) {
    return x + y;
}

function subt(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

function mult(x, y) {
    return x * y;
}

function calc(num1, num2, operation) {
	console.log("current", operation);
    return eval(operation +"(num1, num2)");
}


window.addEventListener("click", function() {
	let currentOp = event.target.id;
	let number1 = parseInt(document.getElementById("user1").value);
	let number2 = parseInt(document.getElementById("user2").value);
	// console.log("numbers", number1, number2);
	console.log("currentOp", currentOp);
	console.log("eventtarget", event.target.className);
	if (event.target.className === "button"){
		calculation.innerHTML = calc(number1, number2, currentOp);
	}
	// console.log("eventtarget", event.target);
});



// button.addEventListener("click", calc(numbers, numbers2, function))





// let expression = function(){
// 		if (setAdd === true) {
// 			    
// 			} else if (setSubt === true) {
// 			    calculation.innerHTML = number1 - number2;
// 			} else if (setMult === true) {
// 			    
// 			} else if (setDivide === true) {
// 			    calculation.innerHTML = number1 / number2;
// 			} else {
// 			    throw new error("No operation selected.");
// 			}

// 		}
