console.groupCollapsed("spread");

try {

	/* Combining two arrays */
	{
		let smallNumbers = [1, 2, 3];
		let bigNumbers = [100, 200, 300];

		let allNumbers = [...smallNumbers, ...bigNumbers]; // Coverts each array to an argument list

		console.log("allNumbers:", allNumbers); // allNumbers: [1, 2, 3, 100, 200, 300]
	}


	/* Searching for the highest number in an array */
	{
		let numbers = [100, 53, 14, 320, 0, 260];
		let highest = Math.max(...numbers); // Coverts the array to an argument list

		console.log("highest:", highest); // highest: 320
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();