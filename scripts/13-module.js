console.groupCollapsed("module");

/* Import a module (option 1)
 * Importing specific resources with the ability to rename them
 */
import { Person, sum as summarize } from "13-module-export";

/* Import a module (option 2)
 * Importing the whole module into a given resource ('external')
 */
module external from "13-module-export";

try {

	/* Using the imported resources from option 1 */
	{
		let john = new Person("John", "Doe");

		console.log("john.fullName:", john.fullName); // john.fullName: John Doe
		console.log("summarize(1,2):", summarize(1,2)); // summarize(1,2): 3
	}


	/* Using the imported module from option 2 */
	{
		let john = new external.Person("John", "Doe");

		console.log("john.fullName:", john.fullName); // john.fullName: John Doe
		console.log("external.sum(1,2):", external.sum(1,2)); // external.sum(1,2): 3
		
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();