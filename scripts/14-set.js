console.groupCollapsed("set");

try {

	/* Set overview */
	{
		let items = new Set();

		// Adding items
		items.add("John");
		items.add({ x: 1, y: 2 });
		items.add(23);

		// Checking for existence
		if (items.has("John")) {
			// ...
		}

		// Getting the Set size
		console.log("items.size:", items.size); // items.size: 3

		// Removing items
		items.delete("John");
		items.clear(); // Removes everything

		// Iterating over the items (Doesn't supported yet)
		/*for (let value of items) {
			console.log("value", value);
		}*/
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();