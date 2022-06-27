class Calculator {
	version = 0001; //властивості

	constructor(name) {
		console.log(name, this.version);
		console.log(this);
	}

	add(a, b) {
		console.log(+a + +b);
	}

	substract(a, b) {
		console.log(a - b);
	}
};


window.calculator = new Calculator('dragon');

let c = prompt('Введіть перше число');
let d = prompt('Введіть друге число');

calculator.add(c, d);
