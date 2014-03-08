console.groupCollapsed("const");

try {

	/* Valid Example */
	{
		const SERVER_URL = "http://my.server.com:8080/";
		console.log("SERVER_URL:", SERVER_URL); // SERVER_URL: http://my.server.com:8080/
	}


	/* Invalid Examples */

	// 1. constants are block-scoped and they aren't accessible outside their block
	{
		const FOO = "bar";

		if (true) {
			const BAR = "foo";
		}

		console.log("FOO:", FOO); // FOO: bar
		console.log("BAR:", BAR); // BAR is not defined
	}


	// 2. constants cannot being changed
	{
		const BAR = "foo";

		BAR = "foo2"; // On some browsers this may throw an exception, depending on their ES6 implementation

		console.log("BAR:", BAR); // BAR: foo
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();