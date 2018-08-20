//Part Two: more data types

let my_array = [1, 2, 3, 'a', 'b', 'c'];
let my_sad_array = []
// my_array[0] >> 1
// my_array[1] >> 2
// my_array[5] >> 'c'
// my_array[-1] >> 'c'
// my_array[-2] >> 'b'

//spoiler alert! arrays and strings are essentially the same thing, the only reason js treats them a little differently is because of how their properties are set up
// let string = 'string'
// string[0] >> 's'

my_array.join(', '); // >> 1, 2, 3, 'a', 'b', 'c'

//there are other methods you can read about them here: https://www.w3schools.com/js/js_array_methods.asp