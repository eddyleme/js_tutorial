//Part 5: Functions

//Step 1: Declare it at the top of the file

function myPlusOneFunction(variable) {
	return variable + 1;
}

//Step 2: Use it

myPlusOneFunction(4);

//Step 3: Use it some more

myPlusOneFunction(189);


//You dont need a variable

function sayHi() {
	console.log('Hi');
}
//you do need the parenthesis though
sayHi();

//you can include as many arguments in a function as you want
//you can even include a ...rest parameter that takes in a variable amount of arguments:

function sayHiToEveryone(...everyone) {
	let temp_array = everyone[0];
	for(let i=0; i<temp_array.length; i++) {

		console.log(`Hello ${temp_array[i]}`);
	}
	//if you forget the backticks with your template literal it will print out ${everyone} as a string
}


let adops_array = ['ed', 'patrick', 'lorena', 'patricio', 'clevis', 'siyuan', 'keith', 'kevin']

sayHiToEveryone(adops_array);
