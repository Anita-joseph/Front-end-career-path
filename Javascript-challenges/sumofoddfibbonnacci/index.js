function sumOddFibonacciNumbers(num) {
	let num1 = 0;
	let num2 = 1;
	let oddFibonacciSum = 1;

	while (true) {
		let nextFib = num1 + num2;
		num1 = num2;
		num2 = nextFib;
		if (nextFib > num) {
			break;
		}

		if (nextFib % 2 === 1) {
			oddFibonacciSum += nextFib;
		}
	}

	return oddFibonacciSum;
}

