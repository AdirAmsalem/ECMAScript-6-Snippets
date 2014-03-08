console.groupCollapsed("syntax refinements");

try {

	/* Old-style vs ES6 object declaration */
	{
		// Old-style
		let oldPoint = function(x, y) {
			return {
				x: x,
				y: y
			};
		};

		// ES6
		let newPoint = function(x, y) {
			return {
				x,
				y
			};
		};

		console.log("oldPoint(1,2):", oldPoint(1,2)); // oldPoint(1,2): Object {x: 1, y: 2}
		console.log("newPoint(1,2):", newPoint(1,2)); // newPoint(1,2): Object {x: 1, y: 2}
	}


	/* Old-style vs ES6 function declaration in an object */
	{
		// Old-style
		let oldHello = {
			message: "Hello World",
			say: function() {
				return this.message;
			}
		};

		// ES5
		let newHello = {
			message: "Hello World",
			say() {
				return this.message;
			}
		};

		console.log("oldHello.say():", oldHello.say()); // oldHello.say(): Hello World
		console.log("newHello.say():", newHello.say()); // newHello.say(): Hello World 
	}


	/* Old-style vs ES6 function declaration (Arrow functions) */
	{
		// Old-style
		let oldSayHello = function(name) {
			return "Hello " + name + "!";
		};

		// ES6
		let newSayHello = (name) => "Hello " + name + "!";

		console.log("oldSayHello(\"John\"):", oldSayHello("John")); // oldSayHello("John"): Hello John!
		console.log("newSayHello(\"John\"):", newSayHello("John")); // newSayHello("John"): Hello John!
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();