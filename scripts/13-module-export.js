/* Export the Person class */
export class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	get fullName() {
		return this.firstName + " " + this.lastName;
	}
}

/* Export the sum function */
export let sum = (...numbers) => {
	let total = 0;

	numbers.forEach((number) => total += number);

	return total;
};