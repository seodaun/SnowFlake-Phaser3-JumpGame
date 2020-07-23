
import store from '../../app/store';
import button from '../utils/button';
class RestartScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'RestartScene',
        });
    }
    create() {
        this.cameras.main.setZoom(1);
        this.restart_btn = new button(180, 320, 'RestartBtn', this.mouseClick, this, 'static');

    }
    update() {
        this.restart_btn.update();
    }
    mouseClick() {
        console.log('restart');
            this.scene.transition({
                target: 'GameScene',
                moveAbove: true,
                duration: 1000,
                remove:false,

            })
    }
}
export default RestartScene;