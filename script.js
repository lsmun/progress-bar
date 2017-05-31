class Matrix {
	constructor(x,y) {
		this.matrix = new Array();

		for(var i = 0; i < x; i++) {
			this.matrix.push(new Array());
			for(var j = 0; j < y; j++) {
				this.matrix[i].push(false);
			}
		}
        
        
        for(var i = 0; i < this.matrix.length; i++) {
			for(var j = 0; j < this.matrix[i].length; j++) {
					document.body.innerHTML += '<input type="checkbox" id="'+i+'-'+j+'">';
                
                    
			}
			document.body.innerHTML += "<br>";
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
        document.getElementById(x+'-'+y).checked = true;
	}

	turnOff(x,y) {
		this.matrix[x][y] = false;
        document.getElementById(x+'-'+y).checked = false;
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