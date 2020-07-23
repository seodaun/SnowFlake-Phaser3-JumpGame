import Phaser from 'phaser';

export default class Platform extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        this.scene = config.scene;
        this.scene.add.existing(this);
        this.x = config.x;
        this.y = config.y;
        this.scene.physics.world.enable(this);
        // Collider to player
        this.body.setAllowGravity(false);
        this.setScrollFactor(1,0);
        //this.body.setImmovable();
    }

}