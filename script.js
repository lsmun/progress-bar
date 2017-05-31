class Matrix {
	constructor(x,y) {
		this.matrix = new Array();

		for(var i = 0; i < x; i++) {
			this.matrix.push(new Array());
			for(var j = 0; j < y; j++) {
				this.matrix[i].push(false);
			}
		}
	}

	get() {
		return this.matrix;
	}

	state(x,y) {
		return this.matrix[x][y];
	}

	turnOn(x,y) {
		this.matrix[x][y] = true;
	}

	turnOff(x,y) {
		this.matrix[x][y] = false;
	}

	toString() {
		for(var i = 0; i < this.matrix.length; i++) {
			for(var j = 0; j < this.matrix[i].length; j++) {
				if(this.matrix[i][j] === true)
					document.body.innerHTML += '<span><input type="checkbox"checked></span>';
				else
					document.body.innerHTML += '<span><input type="checkbox"></span>';
			}
			document.body.innerHTML += "<br>";
		}
	}
}

// Testing
var sampleMatrix = new Matrix(5,5);
sampleMatrix.turnOn(2,2);
sampleMatrix.turnOn(2,3);
sampleMatrix.turnOff(2,3);
sampleMatrix.toString();

console.log(sampleMatrix.get());
console.log(sampleMatrix.state(2,2));