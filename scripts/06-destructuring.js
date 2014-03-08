console.groupCollapsed("destructuring");

try {

	/* Swapping variables */
	{
		let foo = "bar";
		let bar = "foo";

		[foo, bar] = [bar, foo]; // Declares 'foo' as 'bar', and 'bar' as 'foo'

		console.log("foo:", foo); // foo: foo
		console.log("bar:", bar); // bar: bar
	}


	/* Assinging variables from an array */
	{
		let names = ["Kate", "Ashley"];

		let [name1, name2] = names; // Defines 'name1' as the value of the first item in the array, and 'name2' as the value of the second item

		console.log("name1:", name1); // name1: Kate
		console.log("name2:", name2); // name2: Ashley
	}

	
	/* Assinging variables from an object */
	{
		let johnDoe = {
			firstName: "John",
			lastName: "Doe"
		};

		let { firstName: first, lastName: last } = johnDoe; // { propertyName: variable } initializes each variable to the value of the property before to it

		console.log("first:", first); // first: John
		console.log("last:", last); // last: Doe

		let { firstName, lastName } = johnDoe; // { propertyName } automatically initializes a variable with the same name as the property, to the property's value

		console.log("firstName:", firstName); // firstName: John
		console.log("lastName:", lastName); // lastName: Doe
	}


	/* Destructuring within the function declaration */
	{
		let johnDoe = {
			id: 1,
			fullName: {
				firstName: "John",
				lastName: "Doe"
			}
		};

		let showPerson = function({ id, fullName: { firstName: first, lastName: last } }) {
			return id + " - " + first + " " + last;
		};

		console.log("showPerson(johnDoe):", showPerson(johnDoe)); // showPerson(johnDoe): 1 - John Doe 
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();