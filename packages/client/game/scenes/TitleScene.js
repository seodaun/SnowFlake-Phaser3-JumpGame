
import store from '../../app/store';
import button from '../utils/button';
import platform from "../assets/Title/Obj/object_platform_1.png";
class TitleScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'TitleScene',
        });
    }
    create() {
        this.cameras.main.setZoom(1);
        this.bg = this.add.image(0, 0, 'title-bg').setOrigin(0, 0);
        this.bg2 = this.add.image(0, 0, 'title-bg2').setOrigin(0, 0);
        this.bgEffect = this.add.image(0, 0, 'title-bg-effect').setOrigin(0, 0);
        this.bgCloud_1 = this.add.image(20, 40, 'ingame-bg-cloud_1').setOrigin(0, 0);
        this.bgCloud_2 = this.add.image(210, 49, 'ingame-bg-cloud_2').setOrigin(0, 0);
        this.bgText = this.add.image(70, 70, 'title-bg-text').setOrigin(0, 0);
        this.bgMountain_2 = this.add.image(-90, 484, 'ingame-bg-mountain_2').setOrigin(0, 0);
        this.bgMountain_1 = this.add.image(160, 484, 'ingame-bg-mountain_1').setOrigin(0, 0);
        this.bgMountain_1 = this.add.image(20, 425, 'platform').setOrigin(0, 0);
        this.bgMountain_1 = this.add.image(120, 374, 'character').setOrigin(0, 0);
        this.start_btn = new button(160, 520, 'titleStartBtn', this.mouseClick, this, 'static');

    }
    update() {
        this.start_btn.update();
    }
    mouseClick() {
        this.scene.start('GameScene');
    }
}
export default TitleScene; 