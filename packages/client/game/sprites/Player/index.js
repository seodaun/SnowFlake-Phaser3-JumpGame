import Phaser from 'phaser';
import { debug } from 'easy-peasy';

class dot extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture) {
        super(scene,x,y,texture);
        this.scene.add.existing(this);
    }
    destroy(fromScene) {
        super.destroy(fromScene);
    }
}

export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.scene = scene;
        this.score = 0;
        this.GRAVITY = this.scene.physics.world.gravity;
        let me = this;
        this.animations = {
            idle: 'idle',
            jump: 'jump',
        };
        this.state_kind = {
            jump: 'jump',
            stand: 'stand',
        };
        this.isDrag = false;
        this.isFall = true;
        this.dots = [];
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
        this.body.setBounce(true,false);
        for (let i = 0; i < this.scene.platforms.children.size; i++) {
            const collObj = this.scene.platforms.children.entries[i];
            this.scene.physics.add.overlap(this, collObj, () => this.collected(collObj));
        }
        this.body.checkCollision.up = false;
        this.body.checkCollision.left = false;
        this.body.checkCollision.right = false;
        this.prevMousePos = new Phaser.Math.Vector2(0, 0);
        this.nowMousePos = new Phaser.Math.Vector2(0, 0);
        this.anims.play('jump', false);
        this.scene.physics.add.overlap(this,this.scene.coll)
        this.setInteractive({ draggable: true })
            .on('dragstart', function (pointer) {
                if (!me.isFall) {
                    me.prevMousePos.set(pointer.worldX, pointer.worldY);
                }
            })
            .on('drag', function (pointer) {
                me.nowMousePos.set(pointer.worldX, pointer.worldY);
                let velocity = me.getLaunchVelocity();
                if(me.dots.length !=0){
                    for(let i =me.dots.length-1 ;i >= 0;i--){
                        me.dots[i].destroy();
                        me.dots.splice(i,1);
                    }
                }
                for (let i = 10; i <= 100; i += 10){
                    let trajectoryPos = me.getTrajectoryPoint(me.prevMousePos, velocity, i);
                    me.dots.push(new dot(me.scene,trajectoryPos.x,trajectoryPos.y,'dot'));
                }
                me.isDrag = true;
            })
            .on('dragend', function (pointer) {
                if(me.dots.length !=0){
                    for(let i =me.dots.length-1 ;i >= 0;i--){
                        me.dots[i].destroy();
                        me.dots.splice(i,1);
                    }
                }
                if (!me.isFall) {
                    me.jump();
                }
            });
    }
    collected(object) {
        var prevObj;
        const objKey = object.texture.key;
        this.isFall = false;
        let isColl = false;
        this.anims.play('idle', true);
        for(let i = 0; i<this.scene.PLATFORM_CNT+1;i++) {
            if(objKey === 'platform_'+String(i)){
                isColl = true;
            }
        }
        if(object.body.touching.up && isColl){
            this.body.setVelocity(0,0);
        }
        prevObj = object;
    }
    jump() {
        let degree = Math.atan2(this.prevMousePos.y - this.nowMousePos.y, this.prevMousePos.x - this.nowMousePos.x) * 180 / Math.PI;
        if (degree < 0 && degree > -180) {
            this.anims.play('jump', false);
            this.isFall = true;
            let vel = this.getLaunchVelocity();
            this.body.setVelocity(vel.x, vel.y);
        }
    }
    getTrajectoryPoint(prevPos, velocity , n) {
        let t = 1 / 60;
        let stepVelocityX = t * (-velocity.x* 0.05);
        let stepVelocityY = t * (-velocity.y* 0.05);
        let stepGravityX = t *t * (this.GRAVITY.x* 0.05);
        let stepGravityY = t * t * (-this.GRAVITY.y* 0.05);
        let startX = (-prevPos.x* 0.05);
        let startY = (-prevPos.y* 0.05);
        let tpx = startX + n * stepVelocityX + 0.5 * (n * n + n) * stepGravityX;
        let tpy = startY + n * stepVelocityY + 0.5 * (n * n + n) * stepGravityY;
        tpx = (-tpx* 20);
        tpy = (-tpy* 20);
        return {
            x: tpx,
            y: tpy
        };
    }
    getLaunchVelocity() {
        let dx = this.nowMousePos.x - this.prevMousePos.x;
        let dy = this.nowMousePos.y - this.prevMousePos.y;
        dx *= 3;
        dy *= 3;
        return { x: -dx, y: -dy };
    }
}