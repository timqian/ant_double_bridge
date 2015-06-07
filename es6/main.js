import Ants from './Ants.js';
import Phero from './Phero.js';
import PIXI from 'pixi';
import CONFIG from './CONFIG.js';

Ants.update(Phero);

// make 'requestAnimFrame' work
window.requestAnimFrame = function(){
  return (
    window.requestAnimationFrame       || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     || 
    function(/* function */ callback){
        window.setTimeout(callback, 1000 / 60);
    }
  );
}();


// create an new instance of a pixi stage
var stage = new PIXI.Stage(0x66FF99);

// create a renderer instance
var renderer = PIXI.autoDetectRenderer(CONFIG.STAGE_SIZE);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame( animate );

// create a texture from an image path
var texture = PIXI.Texture.fromImage('bunny.png');
// create a new Sprite using the texture
for (let i = 0; i < Ants.length; i++) {

};
var bunny = new PIXI.Sprite(texture);

// center the sprites anchor point
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

// move the sprite t the center of the screen
bunny.position.x = 200;
bunny.position.y = 150;

stage.addChild(bunny);

function animate() {

    requestAnimFrame( animate );

    // just for fun, lets rotate mr rabbit a little
    bunny.rotation += 0.1;
	
    // render the stage   
    renderer.render(stage);
}
