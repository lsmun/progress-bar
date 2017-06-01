
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
    
    
    timedLoop(){
        
        
        var x = 0;
        var myMatrix = this.matrix;
        var rows = this.matrix.length;
        var columns = this.matrix[0].length;
        
        
        setInterval(function(){   
            for(var m = 0; m < rows; m++) {
                
            
                if(myMatrix[m][x] == true){
                    
                    
                    myMatrix[m][x] = false;
                    document.getElementById(m+'-'+x).checked = false;
                }
                else if(myMatrix[m][x] == false){
                    
                    
                    myMatrix[m][x] = true;
                    document.getElementById(m+'-'+x).checked = true;
                }
            }
            
            
            if( x == columns - 1){
                x = 0;
            }
            else{
                x += 1;
            }
        } ,50);
        
            
            
    }
    
    
    


}


// Testing



var sampleMatrix = new Matrix(5,35);

sampleMatrix.timedLoop();




    






    








