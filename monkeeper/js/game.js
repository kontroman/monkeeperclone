
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

	game.load.image("background", "Art/Backgrounds/MainBG.jpg");
	game.load.spritesheet("playButton", "Art/GUI/playButton.jpg", 197, 99);
	game.load.image("soundButton", "Art/GUI/soundButton.png");


}

function create() {
	game.add.sprite(0,0, 'background');
}


function update() {

}

