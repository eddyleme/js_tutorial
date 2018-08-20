//Intro (// is for notes and doesnt get read by the computer)
let x;
let y = 9;

x = 3;

//let 50_cent = 'rapper'; doesnt work: you cannot name a variables starting with numbers or characters (with the exception of _ and im not sure if any others)

// there's `var` and `const` too

x = 9 + 1;
console.log(x); // outputs 10 to console window

x = x + x; // x is now equal to 20
x = x + 1; // x is 21
x += 1 // x is 22
x++ // x is 23
x-- // x is 22
// there's also `-` for minus, `*` for multiply, `/` for divide, and `%` for modulo, and all of these can be applied the same way as `+=`

// 3/3 = 1

// `%` counts the remainder from division
// 3%3 = 0
// 3%4 = 1
// 3%5 = 2
// 3%6 = 0
// 3%7 = 1
// ...


y = 'a string';
//y+y >> 'a stringa string'
//you cant  `-` `*` or `/`
let template_literal = `you can insert ${y} into ${} as a variable with backticks and the ${} syntax`
//you can also interpolate by adding together strings and variables: "this is " + y + "put together by concatenation"



//js does automatic type conversions (implicit conversions) and this can cause some confusion:
//'a string' + 1; >> 'a string1'
//'1'-1 >> 0


//FUN FACT: the internet is all strings! Encoded in UTF-8 (unicode) just like this file


