// part for loops

//for loop
for (let i = 0; i < 5; i++) {
	console.log("the number is " + i + "\n");
}
//how can we go through every element in our array?
let adops_array = ['ed', 'patrick', 'lorena', 'patricio', 'clevis', 'siyuan', 'keith', 'kevin']


console.log(adops_array[0]);
console.log(adops_array[1]);
console.log(adops_array[2]);
console.log(adops_array[3]);
console.log(adops_array[4]);
console.log(adops_array[5]);
console.log(adops_array[6]);
console.log(adops_array[7]);

//^^thats tedious so we can do this quicker with for loops:
adops_array.sort();
//now the array is sorted alphabetically thanks to some built in array functions from js
for (var i=0; i<adops_array.length; i++) {
	console.log(adops_array[i]);
}
//much better! we can do this using any conditional by modifying the second and third parts in the for

//while loop

/*
while (condition) {
	code block to be executed
}
this is a multiline comment btw
if you dont put a condition in the loop you will have an infinite loop
you can crash your browser if you do this in the console
*/

let n;
//you need to declare the variable before unlike the for loop where you can just declare it in there
while (n < 10) {
	console.log(n);
	//the loop also needs to work towards an end or it will run forever
	n++;
}


//now we can put this all together to start building our own reusable functions, so we can build up in blocks and put everything together instead of having to rewrite everything

