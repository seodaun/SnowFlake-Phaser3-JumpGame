
class Button extends Phaser.GameObjects.Sprite {
    constructor(x, y, texture, callback, scene) {
        super(scene, x, y, texture);
        this.setInteractive({ useHandCursor: true });
        this.on('pointerup', function () {
            callback.call(scene);
        }, this);

        this.on('pointerdown', function () {
        }, this);

        this.on('pointerover', function () {
            this.setFrame(1);
        }, this);

        this.on('pointerout', function () {
            this.setFrame(0);
        }, this);

        scene.add.existing(this);
    }
    update() {
    }
}

export default Button; 