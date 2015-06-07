import Ant from './Ant.js';
import CONFIG from './CONFIG.js';
import uRandomDir from './utils/uRandomDir.js';
// initialize ants' info
var Ants = [];
for (var i=0; i<CONFIG.ANT_NUM; i++) {
	Ants[i] = new Ant(CONFIG.HOME, uRandomDir());
	console.log(Ants[i]);
}

//console.log(CONFIG);
Ants.update = function(Phero, C=CONFIG) {
//console.log(C);	
	var p1=1,p2=1,p3=1,p4=1; 	// probabilities of going four dirs
	var ant = {}; // represent an ant object

	for (let i = 0; i < Ants.length; i++) {
		ant = Ants[i];

		// set the Ps according to Pheros
		p1 = Phero[ant.x+1][ant.y];
		p2 = Phero[ant.x-1][ant.y];
		p3 = Phero[ant.x][ant.y+1];
		p4 = Phero[ant.x][ant.y-1];

		// if ant going into wall, set P to 0(prevent)
		if (ant.x === 1 || ant.x === C.WALL.x + 1) {p2 = 0;}
		if (ant.x === C.STAGE_SIZE || ant.x === C.WALL.x - 1) {p1 = 0;}
		if (ant.y === 1 || ant.y === C.WALL.y[1] + 1) {p4 = 0;}
		if (ant.y === C.STAGE_SIZE || ant.y === C.WALL.y[0] - 1) {p3 = 0;}

  	// prevent backwards 
  	if (ant.dx === 1 && ant.dy === 0) {p2 = 0;}
  	else if (ant.dx === -1 && ant.dy === 0) {p1 = 0;}
		else if (ant.dx === 0 && ant.dy === 1) {p4 = 0;}
		else {p3 = 0;}

		ant.crawl(p1, p2, p3, p4);

		if (C.FOOD.x - ant.x < 5 && C.FOOD.x - ant.x > -5 && 
			  C.FOOD.y - ant.y < 5 && C.FOOD.y - ant.y > -5 ) {
			ant.getFood();
		}

		//add pheromone on the ant's position
		Phero.add(ant.x, ant.y);
	};	
}
export default Ants;
