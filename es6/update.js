
export default function() {
	var foodGot = false,
			Ant,
			antX,
			antY,
			phero1,
			phero2,
			phero3,
			phero4;
	for (var i = 0; i < Ants.length; i++) {
		Ant = Ants[i];
		// generate dirction according to phero
		antX = Ant.posi[0],   //! bad!
		antY = Ant.posi[1],
		phero1 = Phero[antX+1][antY],
		phero2 = Phero[antX-1][antY],
		phero3 = Phero[antX][antY+1],
		phero4 = Phero[antX][antY-1];

		// if meet the wall, set phero to 0(prevent going into wall)
		if (antX === 1 || antX === CONFIG.WALL.x + 1) {phero2 = 0;}
		if (antX === CONFIG.STAGE_SIZE || antX === CONFIG.WALL.x - 1) {phero1 = 0;}
		if (antY === 1 || antY === CONFIG.WALL.y[1] + 1) {phero4 = 0;}
		if (antY === CONFIG.STAGE_SIZE || antY === CONFIG.WALL.y[0] - 1) {phero3 = 0;}

		if (CONFIG.FOOD[0] - antX < 10 && CONFIG.FOOD[0] - antX > -10) {
			foodGot = true;
		}
		console.log('antX:' + antX); //???

		// update ant's posi and dir
		Ant.update(phero1, phero2, phero3, phero4, foodGot);

		// release phero
		Phero[Ant.posi[0]][Ant.posi[1]] += 1;

		// see if there is food or home or wall on next step
		// move
		
	};
}

