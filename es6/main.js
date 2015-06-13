import Ants from './Ants.js';
import Phero from './Phero.js';
import PIXI from '../pixi.js';
import CONFIG from './CONFIG.js';

// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
var renderer = new PIXI.WebGLRenderer(800, 600);

// The renderer will create a canvas element for you that you can then insert into the DOM.
document.body.appendChild(renderer.view);

// You need to create a root container that will hold the scene you want to draw.
var stage = new PIXI.ParticleContainer();

// Setup the position and scale of the bunny
var antSprites = [];
for (let i = 0; i < CONFIG.ANT_NUM; i++) {
  var sprite = new PIXI.Sprite.fromImage("bunny.png");
  sprite.position.x = Ants[i].x;
  sprite.position.y = Ants[i].y;
  antSprites.push(sprite);
// Add the sprite to the scene 
  stage.addChild(sprite);
}

// kick off the animation loop (defined below)
animate();

function animate() {
    // start the timer for the next animation loop
    requestAnimationFrame(animate);
    Ants.update(Phero);
    for (let i = 0; i < CONFIG.ANT_NUM; i++) {
      sprite = antSprites[i];
      sprite.position.x = Ants[i].x;
      sprite.position.y = Ants[i].y;
    }
    console.log(antSprites.length)

    // this is the main render call that makes pixi draw your container and its children.
    renderer.render(stage);
}


// // make 'requestAnimFrame' work
// window.requestAnimFrame = function(){
//   return (
//     window.requestAnimationFrame       || 
//     window.webkitRequestAnimationFrame || 
//     window.mozRequestAnimationFrame    || 
//     window.oRequestAnimationFrame      || 
//     window.msRequestAnimationFrame     || 
//     function(/* function */ callback){
//         window.setTimeout(callback, 1000 / 60);
//     }
//   );
// }();