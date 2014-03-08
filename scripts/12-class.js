console.groupCollapsed("class");

try {

	/* Basic class declaration */
	{
		class Person {
			constructor(firstName, lastName) {
				this.firstName = firstName;
				this.lastName = lastName;
			}

			greet(name = "Someone") {
				return this.firstName + ": Hello " + name + ".";
			}
		}

		let john = new Person("John", "Doe");

		console.log("john.greet(\"Kate\"):", john.greet("Kate")); // john.greet("Kate"): John: Hello Kate.
	}


	/* Extending a class */
	{
		class Person {
			constructor(firstName, lastName) {
				this.firstName = firstName;
				this.lastName = lastName;
			}

			get fullName() {
				return this.firstName + " " + this.lastName;
			}
		}

		class Employee extends Person {
			constructor(firstName, lastName, position) {
				super(firstName, lastName);
				this.position = position;
			}

			get fullName() {
				return super.fullName + ", " + this.position;
			}
		}

		let john = new Employee("John", "Doe", "Front-End Developer");

		console.log("john.fullName:", john.fullName); // john.fullName: John Doe, Front-End Developer 
	}

} catch(e) {
	console.error(e.message);
}

console.groupEnd();