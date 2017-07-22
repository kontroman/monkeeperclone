var boot = function(game){
	console.log('boot started');
};
/*
boot.prototype = {
	preload: function(){
		this.game.stage.backgroundColor = 'DDDDDD';
		this.game.load.image('preloaderBG', 'Art/Backgrounds/preloaderBG.jpg');
		this.game.load.image('preloaderProgressBar', 'Art/progressBar.png');
	},

	create: function(){
	this.game.state.start('Preload');
	}
}

*/

boot.prototype = {
	preload: function(){

		console.log('as');
	
		var preloaderBG = this.add.sprite(0,0,"preloaderBG");
		var progressBar = this.add.sprite(279, 305, 'progressBar');

		//images
		this.game.load.image("background", "Art/Backgrounds/MainBG.jpg");
		this.game.load.image("element_border", "Art/element_border.png");
		this.game.load.image("element_box2", "Art/element_box2.png");
		this.game.load.image("element_bush", "Art/element_bush.png");
		this.game.load.image("gameplayIntro", "gameplayIntro.png");
		this.game.load.image("gameplayTip", "Art/gameplayTip.png");
		//this.game.load.image("progressBar", "Art/progressBar.png");
		this.game.load.image("rocksBottom", "Art/rocksBottom.png");
		this.game.load.image("gameBG", "Art/Backgrounds/gameBG.jpg");
		this.game.load.image("levelsBG", "Art/Backgrounds/levelsBG.jpg");
		//this.game.load.image("preloaderBG", "Art/Backgrounds/preloaderBG.jpg");
		this.game.load.image("starBig_inactive", "Art/GUI/starBig_inactive.png");
		this.game.load.image("starBig_active", "Art/GUI/starBig_active.png");
		this.game.load.image("star_inactive", "Art/GUI/star_inactive.png");
		this.game.load.image("star_active", "Art/GUI/star_active.png");
		this.game.load.image("scoreBlock", "Art/GUI/scoreBlock.png");
		this.game.load.image("levelButtonLocked", "Art/GUI/levelButtonLocked.png");
		this.game.load.image("soundButton", "Art/GUI/soundButton.png");
			console.log('images loaded');

		//sprites
		this.game.load.spritesheet("playButton", "Art/GUI/playButton.png", 394, 197);
		this.game.load.spritesheet("OkButton", "Art/GUI/OkButton.png", 202, 59);
		this.game.load.spritesheet("levelButtonBG", "Art/GUI/levelButtonBG.png", 182, 91);
		this.game.load.spritesheet("soundButton", "Art/GUI/soundButton.png", 360, 90);
		this.game.load.spritesheet("backBtn", "Art/backBtn.png", 140, 70);
		this.game.load.spritesheet("keeper", "Art/keeper.png", 1560, 142);
		this.game.load.spritesheet("levelCaption", "Art/levelCaption.png", 270, 2280);
		this.game.load.spritesheet("monkey", "Art/monkey.png", 1080, 142);
		this.game.load.spritesheet("nextBtn", "Art/nextBtn.png", 140, 70);
		this.game.load.spritesheet("retryBtn", "Art/retryBtn.png.png", 140, 70);
			console.log('sprites loaded');

		//font
		this.game.load.bitmapFont('CCZonksWhite', 'Fonts/CCZoinksWhite.png', 'Fonts/CCZoinksWhite.fnt');
			console.log('font loaded');

		//sounds
		this.game.load.audio('boxMovement', ['Sounds/boxMovement.ogg', 'Sounds/boxMovement.mp3']);
		this.game.load.audio('win', ['Sounds/win.ogg', 'Sounds/win.mp3']);
		this.game.load.audio('steps', ['Sounds/steps.ogg', 'Sounds/steps.mp3']);
		this.game.load.audio('star03', ['Sounds/star03.ogg', 'Sounds/star03.mp3']);
		this.game.load.audio('star02', ['Sounds/star02.ogg', 'Sounds/star02.mp3']);
		this.game.load.audio('star01', ['Sounds/star01.ogg', 'Sounds/star01.mp3']);
		this.game.load.audio('mouseOver', ['Sounds/mouseOver.ogg', 'Sounds/mouseOver.mp3']);
		this.game.load.audio('mouseDown', ['Sounds/mouseDown.ogg', 'Sounds/mouseDown.mp3']);
		this.game.load.audio('musicgameplay', ['Sounds/monkeeper_gameplay_44100.ogg', 'Sounds/monkeeper_gameplay_44100.mp3']);
		this.game.load.audio('musicplay', ['Sounds/monkeeper_main_44100.ogg', 'Sounds/monkeeper_main_44100.mp3']);
			console.log('sounds loaded');
	},

	create: function() {
		musicgameplay = this.game.add.audio('musicgameplay');
		musicplay = this.game.add.audio('musicplay');
		musicgameplay.loop = true;
		musicplay.loop = true;
		this.game.state.start("menu");
	}
		
}