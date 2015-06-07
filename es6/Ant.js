import uRandomDir from './utils/uRandomDir.js'

class Ant {
  constructor(posi, dir) {
    this.x = posi.x; //posi = [x, y]: coordinates of the ant
    this.y = posi.y;
    this.dx = dir.dx; //dir = [dx, dy]: change of coordi
    this.dy = dir.dy;
    this.food = false;
  }

  /**
  * crawl accroding to posibilities
  */
  crawl (p1, p2, p3, p4) {
    let dir = uRandomDir(p1, p2, p3, p4);
	  this.dx = dir.dx;
    this.dy = dir.dy;
  	this.x = this.x + this.dx;
  	this.y = this.y + this.dy;
  }

  //if meet food set food true and craw backwards for 2 steps
  getFood() {
    this.food = true;
    this.dx = -this.dx;
    this.dy = -this.dy;
    this.x = this.x + 2 * this.dx;
    this.y = this.y + 2 * this.dy;
  }
  // releasePhero () {

  // }

  // dirToCoor= {
  //   1: {x:1, y:0},
  //   2: {x:-1, y:0},
  //   3: {x:0, y:1},
  //   4: {x:0, y:-1},
  // }
}

export default Ant;
