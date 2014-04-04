console.groupCollapsed("deafult parameters");

try {

	/* Old-style default declaration */
	{
		let sayHello = function(name) {
			name = name || "Guest";
			return "Hello " + name;
		};

		console.log("old sayHello():", sayHello()); // old sayHello(): Hello Guest 
		console.log("old sayHello(\"Adir\"):", sayHello("Adir")); // old sayHello(): Hello Adir 
	}


	/* ES6 default parameters */
	{
		let sayHello = function(name = "Guest") { // 'name' argument is declared as "Guest" by default
			return "Hello " + name;
		};

		console.log("new sayHello():", sayHello()); // new sayHello(): Hello Guest 
		console.log("new sayHello(\"Adir\"):", sayHello("Adir")); // new sayHello(): Hello Adir 
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();