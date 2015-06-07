import CONFIG from './CONFIG.js'

// initialize pheromone distribution
var Phero = [];
for (var i=0; i<CONFIG.STAGE_SIZE; i++) {
	Phero[i]=[];
	for (var j=0; j<CONFIG.STAGE_SIZE; j++) {
		Phero[i][j] = 1;
	}
}

// add Phero at [x, y]
Phero.add = function(x, y) {
	Phero[x][y] += 1;
}

export default Phero;