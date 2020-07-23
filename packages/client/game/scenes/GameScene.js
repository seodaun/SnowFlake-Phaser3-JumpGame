
import store from '../../app/store';
import Player from '../sprites/Player';
import Platform from '../sprites/Platform'
import Phaser from "phaser";
class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene',
        });
    }
    create() {
        this.platforms = this.physics.add.staticGroup();
        this.bg = this.add.image(0, 0, 'title-bg').setOrigin(0, 0).setScrollFactor(1,0);
        this.bg2 = this.add.image(0, 0, 'title-bg2').setOrigin(0, 0).setScrollFactor(1,0);
        this.bgMountain_2 = this.add.image(-90, 484, 'ingame-bg-mountain_2').setOrigin(0, 0).setScrollFactor(1,0);
        this.bgMountain_1 = this.add.image(160, 484, 'ingame-bg-mountain_1').setOrigin(0, 0).setScrollFactor(1,0);
        this.bgCloud_1 = this.add.image(20, 40, 'ingame-bg-cloud_1').setOrigin(0, 0).setScrollFactor(1,0);
        this.bgCloud_2 = this.add.image(210, 40, 'ingame-bg-cloud_2').setOrigin(0, 0).setScrollFactor(1,0);
        this.cameras.main.setPosition(0,0);
        this.cameras.main.setZoom(1);
        this.PLATFORM_CNT =24;
        var lastPos;
        for (let i = 1; i < 4; i++){
            let x = Phaser.Math.Between(50,300);
            const y = 200 * i+10;
            if(i==3){
                x=160;
                lastPos = {x:x,y:y}
            }
            const platform = this.platforms.create(x, y, 'platform_'+String(Phaser.Math.Between(1, 24)));
            const body = platform.body;
            body.updateFromGameObject();
        }
        this.player = new Player(this, lastPos.x, lastPos.y-50);
        this.physics.add.collider(this.player, this.platforms);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setLerp(0,1);
        this.score = 0;
        const style = { color: '#000000', fontSize: 24}
        //this.carrotsCollectedText = this.add.text(230, 30, 'Score: '+String(this.score)
        //    , style).setScrollFactor(0).setOrigin(1, 0);
        this.bgEffect = this.add.image(0, 0, 'title-bg-effect').setOrigin(0, 0).setScrollFactor(1,0);
        this.input.keyboard.addKey('R').on('up', () => {
            this.game.scene.start('GameScene');
        });
    }
    shutdown() {
        this.player.destroy();
        this.player = null;
        this.platforms.destroy();
        this.platforms = null;
    }
    update() {
        //this.physics.world.setBounds( 0, -this.player.y-320, this.game.config.width, this.game.config.height);
        this.platforms.children.iterate(platform => {
             const scrollY = this.cameras.main.scrollY;
             if (platform.y >= scrollY + 500){
                 platform.y = scrollY - Phaser.Math.Between(80, 120);
                 platform.body.updateFromGameObject();
             }
             });
        if(this.player.y >= 640){
            this.game.scene.start('GameScene');
        }
    }
    setScore(i){
        this.score +=i;
    }
}
export default GameScene; 