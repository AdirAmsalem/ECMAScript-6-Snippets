console.groupCollapsed("generator");

try {

	/* Basic generator */
	{
		let numbers = function* () {
			yield 1;
			yield 2;
			yield 3;
			yield 4;
			yield 5;
		};

		// First option (manual using 'next')
		{
			let numbersIterator = numbers();
			let item;

			while (item = numbersIterator.next()) {
				if (item.done) break;

				console.log("item.value:", item.value);
			}
		}

		// Second option (automatic using 'for...of')
		{
			for (let number of numbers()) {
				console.log("number:", number);
			}
		}
	}


	/* Using a generator to filter an array of numbers */
	{
		let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

		let even = function* (numbersArray) {
			for (var number of numbersArray) {
				if (number % 2 === 0) {
					yield number;
				}
			}
		};

		for (let evenNumber of even(numbers)) {
			console.log("evenNumber:", evenNumber);
		}
	}


	/* Iterating over an object using a generator */
	{
		let johnDoe = {
			firstName: "John",
			lastName: "Doe"
		};

		let objIterator = function* (obj) {
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					yield [prop, obj[prop]];
				}
			}
		};

		for (let [key, value] of objIterator(johnDoe)) { // Extracts each item to 'key' and 'value' variables
			console.log("key - value:", key + " - " + value);
		}
	}


	/* Iterating over function properties using a generator in the prototype */
	{
		let Person = function(firstName, lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
		};

		Person.prototype[Symbol.iterator] = function* () {
			for (var prop in this) {
				if (this.hasOwnProperty(prop)) {
					yield [prop, this[prop]];
				}
			}
		};

		let billC = new Person("Bill", "Clinton");

		for (let [key, value] of billC) {
			console.log("key - value:", key + " - " + value);
		}
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();