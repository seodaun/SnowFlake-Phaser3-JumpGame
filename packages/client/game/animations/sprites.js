export default function makeSpriteAnimations(scene) {
    scene.anims.create({
        key: 'jump',
        frames: scene.anims.generateFrameNumbers('jump', {
            start: 0,
            end: 2,
        }),
        frameRate: 10,
        repeat: 0,
    });
    scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNumbers('idle', {
            start: 0,
            end: 2,
        }),
        frameRate: 6,
        repeat: -1,
    });
}