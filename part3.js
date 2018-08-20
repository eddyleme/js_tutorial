//Part 3: boolean (look at w3schools.com for more content, that's where I got the switch case example)


let boolean = true;
boolean = false;
let not_false = !false // its true
//! makes true false and false true
// 1~true (or any number other than zero acts as true) 0~false
// the presence of a variable can act as true
// we can get booleans from > < >= <=
// we can also get booleans by checking equality/inequality with === or !==
// there's versions of these that don't check for type: == and != but these can cause problems when comparing '0' to 0

// then there's comparison operators && is and, and || is or
// && only returns true if both values are true
// || returns true if either one of the values is true

true && true // >> true
true && false // >> false
true || false // >> true
false || false // >> false

null || undefined || NaN // >> false
// these are all different data types that roughly mean the absence of a value
// oh yea and you can chain || and && just be mindful of the order of operations if you're using them together they can be very useful for clean logic



// All of this true/false stuff is useful for if-elsif-else logic!

if (true) {
	console.log('the statement in the parenthesis above is true')
} else if(true || false) {
	console.log('the statement in the parenthesis above is also true although only one of these can be executed and it won\'t be this one')
} else {
	console.log('as a last ditch effort this one will be excecuted if the above two evaluate to false')
}

//you can use as many else ifs as you want, else if and else are optional but else must be last and you need an if
//keep in mind the code in the parenthesis is being run and this can cause confusion if you're not mindful
let text = 'not sure what day it is'
switch (new Date().getDay()) {
	case 6:
		text = 'today is saturday';
		break;
	case 0:
		text = 'today is sunday';
		break;
	default:
		text = 'still not sure what day it is';
}

//need to include break on the cases or it will run through the rest of the code block, unless you want it to run through the rest of the block, which is fine too
//good for looking through long arrays, why do it yourself if the computer does it better/faster
