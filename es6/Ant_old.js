import uRandomDir from './utils/uRandomDir.js'

class Ant {
  constructor(posi, dir) {
    this.posi = posi; //posi = [x, y]: coordinates of the ant
    this.dir = dir; //dir = [dx, dy]: change of coordi
  }

  /**
  * Generate next step, accroding to pheromones aroud and last dir
  * @params: pheros around; last dir (int,int,int,int,[dx,dy])
  * @out: next direction ([dx,dy])
  */
  update (phero1, phero2, phero3, phero4, foodGot, lastDir=this.dir) {
  	console.log("inside: " + this.posi[0]);
  	if (foodGot) {
  		this.dir[0] = -lastDir[0];
  		this.dir[1] = -lastDir[1];
  	} else {
	  	// prevent backwards 
	  	if (lastDir[0] === 1 && lastDir[1] === 0) {
	  		phero2 = 0;
	  	} else if (lastDir[0] === -1 && lastDir[1] === 0) {
	  		phero1 = 0;
	  	} else if (lastDir[0] === 0 && lastDir[1] === 1) {
	  		phero4 = 0;
	  	} else {
	  		phero3 = 0;
	  	}
	  	this.dir = uRandomDir(phero1, phero2, phero3, phero4);
  	}

  	this.posi[0] = this.posi[0] + this.dir[0];
  	this.posi[1] = this.posi[1] + this.dir[1];
  	// console.log('pheros: ' + phero1 + ' ' + phero2 +' '+ phero3 + ' ' + phero4);
  	// console.log(nextDir);
  	 console.log(lastDir);
  	 console.log(this.dir);
  }


}

export default Ant;
