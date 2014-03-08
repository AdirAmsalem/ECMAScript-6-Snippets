console.groupCollapsed("map");

try {

	/* Map overview */
	{
		let items = new Map();

		// Adding items
		items.set("foo", "bar");
		items.set({ name: "John Doe" }, { position: "Front-End Developer" });

		// Checking for existence
		if (items.has("foo")) {
			// ...
		}

		// Getting the Map size
		console.log("items.size:", items.size); // items.size: 2

		// Removing items
		items.delete("foo");
		items.clear(); // Removes everything

		// Iterating over the items (Doesn't supported yet)
		/*for (let [key, value] of items) {
			console.log("key - value:", key + " - " + value);
		}*/

		// Iterating over the keys (Doesn't supported yet)
		/*for (let key of items.keys()) {
			console.log("key:", key);
		}*/

		// Iterating over the values (Doesn't supported yet)
		/*for (let value of items.values()) {
			console.log("value:", value);
		}*/
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();