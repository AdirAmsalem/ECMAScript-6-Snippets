console.groupCollapsed("let");

try {

	/* Valid Example */
	{
		let serverUrl = "http://my.server.com:8080/";
		console.log("serverUrl:", serverUrl); // serverUrl: http://my.server.com:8080/
	}


	/* Invalid Example */

	// let variables are block-scoped and they aren't accessible outside their block
	{
		let foo = "bar";

		if (true) {
			let bar = "foo";
		}

		console.log("foo:", foo); // foo: bar
		console.log("bar:", bar); // bar is not defined ('ReferenceError' Exception)
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();