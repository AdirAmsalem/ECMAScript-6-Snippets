console.groupCollapsed("array comprehensions");

try {

	/* Old-style vs ES6 Array.prototype.map' */
	{
		let fruits = ["apple", "orange", "banana"];

		// Old-style
		let oldBlackFruits = fruits.map( function(fruit) {
			return "black " + fruit;
		});

		// ES6
		let newBlackFruits = [for (fruit of fruits) "black " + fruit];

		console.log("oldBlackFruits:", oldBlackFruits); // oldBlackFruits: ["black apple", "black orange", "black banana"] 
		console.log("newBlackFruits:", newBlackFruits); // newBlackFruits: ["black apple", "black orange", "black banana"] 
	}


	/* Old-style vs ES6 Array.prototype.filter' */
	{
		let fruits = ["apple", "orange", "banana"];

		// Old-style
		let oldFruitsWithN = fruits.filter( function(fruit) {
			return ~fruit.indexOf("n");
		});

		// ES6
		let newFruitsWithN = [for (fruit of fruits) if (~fruit.indexOf("n")) fruit];

		console.log("oldFruitsWithN:", oldFruitsWithN); // oldFruitsWithN: ["orange", "banana"] 
		console.log("newFruitsWithN:", newFruitsWithN); // newFruitsWithN: ["orange", "banana"] 
	}


	/* ES6 Combination of both map and filter */
	{
		let fruits = ["apple", "orange", "banana"];

		let blackFruitsWithN = [for (fruit of fruits) if (~fruit.indexOf("n")) "black " + fruit];

		console.log("blackFruitsWithN:", blackFruitsWithN); // blackFruitsWithN: ["black orange", "black banana"] 

		for (blackFruitWithN of blackFruitsWithN) {
			console.log("blackFruitWithN:", blackFruitWithN);
		}
	}


	/* ES6 Combination of both map and filter + a generator function */
	{
		let fruits = ["apple", "orange", "banana"];

		let blackFruitsWithNIterator = (for (fruit of fruits) if (~fruit.indexOf("n")) "black " + fruit);
		let item;

		while (item = blackFruitsWithNIterator.next()) {
			if (item.done) break;

			console.log("item.value:", item.value);
		}
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();