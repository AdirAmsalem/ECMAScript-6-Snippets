console.groupCollapsed("iterator");

try {

	/* Iterating over an array using the 'next' method */
	{
		let numbers = [1, 2, 3, 4, 5];
		let numbersIterator = numbers[Symbol.iterator]();
		let item;

		while (item = numbersIterator.next()) {
			if (item.done) break;

			console.log("item.value:", item.value);
		}
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();