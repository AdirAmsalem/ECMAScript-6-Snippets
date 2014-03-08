console.groupCollapsed("for...of");

try {

	/* Sum function using 'for...of' */
	{
		let sum = function(...numbers) {
			let total = 0;

			for (let number of numbers) {
				total += number;
			}

			return total;
		};

		console.log("sum(1, 2):", sum(1, 2)); // sum(1, 2): 3
		console.log("sum(1, 2, 3, 4):", sum(1, 2, 3, 4)); // sum(1, 2, 3, 4): 10
	}


	/* NodeList iteration using 'for...of' */
	{
		let scripts = document.querySelectorAll("script");

		// Doesn't supported yet
		/*for (let script of scripts) {
			console.log("script:", script);
		}*/
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();