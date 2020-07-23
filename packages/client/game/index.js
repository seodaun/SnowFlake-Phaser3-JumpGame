import Phaser from 'phaser';

// Scenes
import BootScene from './scenes/BootScene';
import TitleScene from './scenes/TitleScene';
import GameScene from './scenes/GameScene';
import RestartScene from './scenes/RestartScene';
const config = {
    type: Phaser.AUTO,
    scale: {
        width: 320,
        height: 640
    },
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 650,
            },
        },
    },
    scene: [BootScene, TitleScene, GameScene,RestartScene],
};

const createGame = () => new Phaser.Game(config);
export default createGame;  