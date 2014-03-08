console.groupCollapsed("promise");

try {

	/* Promise overview */
	{
		let get = (url) => {
			// Initialize and return a Promise
			return new Promise((resolve, reject) => { // Passing 'resolve' and 'reject' callbacks as fulfillment triggers
				let req = new XMLHttpRequest();
				req.open("GET", url);

				req.onload = () => {
					if (req.status === 200) { // Resolve the promise if the status code is 200
						resolve(req.response); // Pass the response to the callback
					} else { // Reject otherwise
						reject(req.statusText); // Pass the statusText to the callback
					}
				};

				req.onerror = () => reject("Network error"); // Reject if there's an error with the request

				req.send();
			});
		};

		get("../index.html") // Running a function which returns a Promise
			.then((response) => { // 'then' method will run on success
				console.log("response:", response.substr(0, response.indexOf("\n")) + " ...");
				console.groupEnd();
			})
			.catch((error) => { // 'catch' method will run on failure. Failure callback can also be passed as a second argument to the 'then' method
				console.warn("error:", error);
				console.groupEnd();
			});
	}

} catch(e) {
	console.error(e.message);
}