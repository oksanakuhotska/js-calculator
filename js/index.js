class Calculator {
	version = 0001; //властивості
	outputElement;
	inputElementA;
	inputElementB;

	constructor(name) {
		console.log(name, this.version);
		console.log(this);
		this.outputElement = document.querySelector('output');
		this.inputElementA = document.querySelector('#calculator-a');
		this.inputElementB = document.querySelector('#calculator-b');
	}

	add() {
		let a = this.inputElementA.value;
		let b = this.inputElementB.value;
		this.outputElement.innerText = +a + +b;
	}

	subtract() {
		let a = this.inputElementA.value;
		let b = this.inputElementB.value;
		this.outputElement.innerText = a - b;
	}

	divide() {
		let a = this.inputElementA.value;
		let b = this.inputElementB.value;
		this.outputElement.innerText = a / b;
	}

	multiply() {
		let a = this.inputElementA.value;
		let b = this.inputElementB.value;
		this.outputElement.innerText = a * b;
	}
};


window.calculator = new Calculator('dragon');