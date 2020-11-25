class RestartDrop extends Phaser.GameObjects.Sprite {
	constructor (scene, x, y, texture, number, text, restartGameCallbackFnc,dropAu){

		super(scene, x, y, texture);
		scene.add.existing(this).setOrigin(0.5,0);
		this.setInteractive();
		this.on('pointerup',this.onClick,this);
		this.number = number;
		this.text = scene.add.text(x + 120,y+40, number, { fontFamily: 'Arial', fontSize: 32, color: '#ffffff', rtl: true });
		this.restartGameCallbackFnc = restartGameCallbackFnc;
		this.dropAu = scene.sound.add('Drop');
	}

	onClick()
	{
		this.restartGameCallbackFnc();
	}

	setNewText(newText)
	{
		this.text.setText(newText);
	}

	doFallAnim()
	{
		var parent = this;
		this.scene.tweens.add({
			targets : this,
			y : CANVAS_HEIGHT/2 + 100,
			ease : 'Power1',
			duration: 500,
			onComplete: function(){
				parent.dropAu.play();
			}
		});
		this.scene.tweens.add({
			targets : this.text,
			y : CANVAS_HEIGHT/2 + 140,
			ease : 'Power1',
			duration: 500
		})
	}
}