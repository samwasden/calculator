const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	let solution = undefined;

	if (mathSymbol === "+") {
		solution = num1 + num2
	} 
	else if (mathSymbol === "-") {
		solution = num1 - num2
	}
	else if (mathSymbol === "*") {
		solution = num1 * num2
	}
	else if (mathSymbol === "/") {
		solution = num1 / num2
	}
	else if (mathSymbol === "√") {
		solution = Math.sqrt(num1)
	}
	else if (mathSymbol === "^") {
		solution = num1 ** num2
	}
	else if (mathSymbol === "%") {
		solution = num1 % num2
	}
	else {
		solution = "Please make a more intelligent input."
	}

	console.log(solution)

	// This line closes the connection to the command line interface.
	reader.close()

});
