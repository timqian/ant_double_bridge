import Random from 'random-js';
var random = new Random(Random.engines.mt19937().autoSeed());

/**
* randomly generate directions according to posibility
* @param: (int) posibility of numbers
*	@out: [dx, dy]
*/
export default function (p0=1, p1=1, p2=1, p3=1) {
	let sum = p0 + p1 + p2 + p3;
	let ran = random.integer(1, sum);
	if (ran <= p0) {
		return {dx:1, dy:0};
	} else if (ran <= p0+p1) {
		return {dx:-1, dy:0};
	} else if (ran <= p0+p1+p2) {
		return {dx:0, dy:1};
	} else {
		return {dx:0, dy:-1};
	}
}
