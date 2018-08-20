function pyramid(i) {
	let asterisk_row = '*'
	while(i>0) {
		console.log(asterisk_row);
		asterisk_row+='*';
		i--;
	}
}

pyramid(30);