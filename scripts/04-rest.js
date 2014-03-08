console.groupCollapsed("rest");

try {

	/* Old-style sum */
	{
		let sum = function() {
			let total = 0;
			let numbers = Array.prototype.slice.call(arguments, 0);

			numbers.forEach( function(number) {
				total += number;
			});

			return total;
		};

		console.log("old sum(1, 2):", sum(1, 2)); // old sum(1, 2): 3
		console.log("old sum(1, 2, 3, 4):", sum(1, 2, 3, 4)); // old sum(1, 2, 3, 4): 10
	}


	/* Sum using the 'rest' operator */
	{
		let sum = function(...numbers) { // Automatically converts the argument list to an array
			let total = 0;

			numbers.forEach( function(number) {
				total += number;
			});

			return total;
		};

		console.log("new sum(1, 2):", sum(1, 2)); // new sum(1, 2): 3
		console.log("new sum(1, 2, 3, 4):", sum(1, 2, 3, 4)); // new sum(1, 2, 3, 4): 10
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();