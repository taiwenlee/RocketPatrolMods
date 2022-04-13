// Tai Wen Lee
// Rocket Patrol Mods
// 4/13/2022
// took _ hours
//
// Point break Down:
// Implement a simultaneous two-player mode (30) 30 min
// Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20) 10 min

let config = {
   type: Phaser.CANVAS,
   width: 640,
   height: 480,
   scene: [Menu, Play]
}

let game = new Phaser.Game(config);

// reserve keyboard bars
let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keyA, keyD, keyW;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;