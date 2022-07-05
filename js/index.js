class Calculator {
	version = 0001; //властивості
	outputElement;
	// inputElementA;
	// inputElementB;
	a = [];
	b = [];
	mathOperation;

	constructor(name) {
		// console.log(name, this.version);
		// console.log(this);
		this.outputElement = document.querySelector('output');
		// this.inputElementA = document.querySelector('#calculator-a');
		// this.inputElementB = document.querySelector('#calculator-b');
	}

	add() {
		let a = this.a.join('');
		let b = this.b.join('');
		this.outputElement.innerText = +a + +b;
	}

	subtract() {
		let a = this.a.join('');
		let b = this.b.join('');
		this.outputElement.innerText = a - b;
	}

	divide() {
		let a = this.a.join('');
		let b = this.b.join('');
		this.outputElement.innerText = a / b;
	}

	multiply() {
		let a = this.a.join('');
		let b = this.b.join('');
		this.outputElement.innerText = a * b;
	}

	// number = '.', this.b = [2, '.']
	addNumber(number) {
		if(this.mathOperation) {
			if(number === '.' && this.b.includes('.')) {return};  //return - вихід із функції
			this.b.push(number);
			this.outputElement.innerText = this.b.join('');
		} else {
			if(number === '.' && this.a.includes('.')) {return};
			this.a.push(number);
			this.outputElement.innerText = this.a.join('');
		}
	}

	clear() {
		this.outputElement.innerText = '';
		this.a = [];
		this.b = [];
		this.mathOperation = '';
	}

	undo() {
		if(this.mathOperation) {
			this.b.pop();
			this.outputElement.innerText = this.b.join('');
		} else {
			this.a.pop();
			this.outputElement.innerText = this.a.join('');
		}
	}

	setMathOperation(operationType) {
		this.mathOperation = operationType;
	}

	equal() {
		if (this.mathOperation) {
			this[this.mathOperation]();
			// this[this.mathOperation](); = this.add();
		}
		// console.log(this.mathOperation);
	}

	
};

// function clear(foo, bar, baz - параметри) {
// 	this.outputElement.innerText = '';
// }
// clear(1, 2,23 - аргументи);
window.calculator = new Calculator('dragon');