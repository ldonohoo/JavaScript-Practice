function binary(decimal) {
	let binString = "0";
	let n = 10;
	let firstOne = false;
	while (decimal > 0) {
		if (decimal >= 2**n) {
			binString += "1";
			firstOne = true;
			decimal -= 2**n;
		} else if (firstOne) { 
			binString += "0"; 
		}
		n--;
	}
	return binString;
}