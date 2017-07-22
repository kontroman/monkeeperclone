var boot = function(game){
	console.log('boot started');
};

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
