import Ant from './Ant.js';
import Random from 'random-js';
var random = new Random(Random.engines.mt19937().autoSeed());

// configeration
var	ANT_NUM = 10,
		HOME = [100, 100],
		FOOD = [400, 150],
		WALL = [[250, 50],[250, 300]];

// store all ants' info
var Ants = [];

for (var i=0; i<ANT_NUM; i++) {
	Ants[i] = new Ant(HOME, random.integer(1,4)); 
	console.log(Ants[i]);
}
