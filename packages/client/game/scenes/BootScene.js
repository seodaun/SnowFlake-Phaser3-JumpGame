import Phaser from 'phaser';
// Animations
import makeSpriteAnimations from '../animations/sprites';
//Title 
import TitleBgEffect from '../assets/Title/BG/title_effect.png';
import TitleBgText from '../assets/Title/BG/title.png';

import TitleStartBtn from '../assets/Title/UI/start_btn.png';

import RestartBtn from '../assets/InGame/Obj/button/restart_btn.png';

//InGame
import Dot from '../assets/InGame/Obj/effect/dot.png';
import InGameBg_1 from '../assets/InGame/BG/title_background.png';
import InGameBg_2 from '../assets/InGame/BG/title_background_2.png';
import InGameBg_mountain_1 from '../assets/InGame/BG/object_mountain_1.png';
import InGameBg_mountain_2 from '../assets/InGame/BG/object_mountain_2.png';
import InGameBg_cloud_1 from '../assets/InGame/BG/object_cloud_1.png';
import InGameBg_cloud_2 from '../assets/InGame/BG/object_cloud_2.png';
import title_text from '../assets/Title/BG/title.png'
import snow_1 from '../assets/Title/Obj/object_snow_1.png';
import snow_2 from '../assets/Title/Obj/object_snow_2.png';
import snow_3 from '../assets/Title/Obj/object_snow_3.png';
import snow_4 from '../assets/Title/Obj/object_snow_4.png';
import PlayerJump from '../assets/InGame/Obj/player/ani_jump.png';
import PlayIdle from '../assets/InGame/Obj/player/ani_idle.png';

import Platform_1 from '../assets/InGame/Obj/platform/object_platform_1.png';
import Platform_2 from '../assets/InGame/Obj/platform/object_platform_2.png';
import Platform_3 from '../assets/InGame/Obj/platform/object_platform_3.png';
import Platform_4 from '../assets/InGame/Obj/platform/object_platform_4.png';
import Platform_5 from '../assets/InGame/Obj/platform/object_platform_5.png';
import Platform_6 from '../assets/InGame/Obj/platform/object_platform_6.png';
import Platform_7 from '../assets/InGame/Obj/platform/object_platform_7.png';
import Platform_8 from '../assets/InGame/Obj/platform/object_platform_8.png';
import Platform_9 from '../assets/InGame/Obj/platform/object_platform_9.png';
import Platform_10 from '../assets/InGame/Obj/platform/object_platform_10.png';
import Platform_11 from '../assets/InGame/Obj/platform/object_platform_11.png';
import Platform_12 from '../assets/InGame/Obj/platform/object_platform_12.png';
import Platform_13 from '../assets/InGame/Obj/platform/object_platform_13.png';
import Platform_14 from '../assets/InGame/Obj/platform/object_platform_14.png';
import Platform_15 from '../assets/InGame/Obj/platform/object_platform_15.png';
import Platform_16 from '../assets/InGame/Obj/platform/object_platform_16.png';
import Platform_17 from '../assets/InGame/Obj/platform/object_platform_17.png';
import Platform_18 from '../assets/InGame/Obj/platform/object_platform_18.png';
import Platform_19 from '../assets/InGame/Obj/platform/object_platform_19.png';
import Platform_20 from '../assets/InGame/Obj/platform/object_platform_20.png';
import Platform_21 from '../assets/InGame/Obj/platform/object_platform_21.png';
import Platform_22 from '../assets/InGame/Obj/platform/object_platform_22.png';
import Platform_23 from '../assets/InGame/Obj/platform/object_platform_23.png';
import Platform_24 from '../assets/InGame/Obj/platform/object_platform_24.png';

import CollRange from '../assets/InGame/collRange.png';
import CollRange2 from '../assets/InGame/collRange.png';
import character from '../assets/Title/Obj/charater.png';

import platform from '../assets/Title/Obj/object_platform_1.png';
class BootScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'BootScene',
        });
    }
    preload() {
        // Collection of loading to do.
        const progress = this.add.graphics();
        this.load.on('complete', () => {
            makeSpriteAnimations(this);
            progress.destroy();
            this.scene.start('TitleScene');
        });
        // Background
        this.load.image('title-bg', InGameBg_1);
        this.load.image('title-bg2', InGameBg_2);
        this.load.image('title-bg-effect', TitleBgEffect);
        this.load.image('title-bg-text', TitleBgText);

        this.load.image('ingame-bg-mountain_1', InGameBg_mountain_1);
        this.load.image('ingame-bg-mountain_2', InGameBg_mountain_2);

        this.load.image('ingame-bg-cloud_1', InGameBg_cloud_1);
        this.load.image('ingame-bg-cloud_2', InGameBg_cloud_2);
        this.load.image('dot', snow_1);
        this.load.image('platform_1', Platform_1);
        this.load.image('platform_2', Platform_2);
        this.load.image('platform_3', Platform_3);
        this.load.image('platform_4', Platform_4);
        this.load.image('platform_5', Platform_5);
        this.load.image('platform_6', Platform_6);
        this.load.image('platform_7', Platform_7);
        this.load.image('platform_8', Platform_8);
        this.load.image('platform_9', Platform_9);
        this.load.image('platform_10', Platform_10);
        this.load.image('platform_11', Platform_11);
        this.load.image('platform_12', Platform_12);
        this.load.image('platform_13', Platform_13);
        this.load.image('platform_14', Platform_14);
        this.load.image('platform_15', Platform_15);
        this.load.image('platform_16', Platform_16);
        this.load.image('platform_17', Platform_17);
        this.load.image('platform_18', Platform_18);
        this.load.image('platform_19', Platform_19);
        this.load.image('platform_20', Platform_20);
        this.load.image('platform_21', Platform_21);
        this.load.image('platform_22', Platform_22);
        this.load.image('platform_23', Platform_23);
        this.load.image('platform_24', Platform_24);

        this.load.image('snow_1', snow_1);
        this.load.image('snow_2', snow_2);
        this.load.image('snow_3', snow_3);
        this.load.image('snow_4', snow_4);
        this.load.image('character', character);
        this.load.image('title_text', title_text);
        this.load.image('collRange', CollRange);
        this.load.image('collRange2', CollRange2);
        this.load.image('platform', platform);
        this.load.spritesheet('RestartBtn', RestartBtn, {
            frameWidth: 67,
            frameHeight: 71,
        });
        this.load.spritesheet('titleStartBtn', TitleStartBtn, {
            frameWidth: 80,
            frameHeight: 82,
        });
        this.load.spritesheet('jump', PlayerJump, {
            frameWidth: 30,
            frameHeight: 30,
        });
        this.load.spritesheet('idle', PlayIdle, {
            frameWidth: 33,
            frameHeight: 30,
        });
    }
    create() {
    }
    update() {
    }
}
export default BootScene;