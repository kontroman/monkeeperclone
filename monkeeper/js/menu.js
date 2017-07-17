
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

	game.load.image("background", "Art/Backgrounds/MainBG.jpg");
	game.load.spritesheet("playButton", "Art/GUI/playButton.png", 394, 197);
	game.load.image("soundButton", "Art/GUI/soundButton.png");


}
var startButton;

function create() {
	game.add.sprite(0,0, 'background');
	startButton = game.add.sprite(300,200, 'playButton', [1]);
	startButton = game.add.sprite(700,500, 'soundButton', [1]);
}


function update() {

}

