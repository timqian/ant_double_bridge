import Ant from './Ant.js';
import uRandomDir from './utils/uRandomDir.js';
import CONFIG from './CONFIG.js'
// initialize ants' info
var Ants = [];
for (var i=0; i<CONFIG.ANT_NUM; i++) {
	Ants[i] = new Ant(CONFIG.HOME, uRandomDir());
	console.log(Ants[i]);
}

// initialize pheromone distribution
var Phero = [];
for (var i=0; i<CONFIG.STAGE_SIZE; i++) {
	Phero[i]=[];
	for (var j=0; j<CONFIG.STAGE_SIZE; j++) {
		Phero[i][j] = 1;
	}
}


export {CONFIG, Ants, Phero};