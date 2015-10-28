namespace CombatRPG {
    export namespace Entities {
        export namespace Map {
            export class Player extends Phaser.Sprite {
                facing: string;
                idle: boolean;

                movingUp: boolean;
                movingDown: boolean;
                movingLeft: boolean;
                movingRight: boolean;

                constructor(game: Phaser.Game, x: number, y: number) {
                    super(game, x, y, 'character', 104);

                    this.idle = true;

                    this.anchor.setTo(0.5, 0);

                    game.physics.arcade.enable(this);

                    this.body.collideWorldBounds = true;
                    this.body.setSize(32, 48, 0, 12);

                    this.animations.add('up', [104, 105, 106, 107, 108, 109, 110, 111, 112], 10, true);
                    this.animations.add('left', [117, 118, 119, 120, 121, 122, 123, 124, 125], 10, true);
                    this.animations.add('down', [130, 131, 132, 133, 134, 135, 136, 137, 138], 10, true);
                    this.animations.add('right', [143, 144, 145, 146, 147, 148, 149, 150, 151], 10, true);

                    game.add.existing(this);

                    this.movingUp = false;
                    this.movingDown = false;
                    this.movingLeft = false;
                    this.movingRight = false;
                }

                update() {
                    this.body.velocity.x = 0;
                    this.body.velocity.y = 0;

                    if (this.movingLeft) {
                        this.body.velocity.x = -200;

                        if (this.facing !== 'left' || this.idle) {
                            this.play('left');
                            this.facing = 'left';
                            this.idle = false;
                        }
                    }
                    else if (this.movingRight) {
                        this.body.velocity.x = 200;

                        if (this.facing !== 'right' || this.idle) {
                            this.play('right');
                            this.facing = 'right';
                            this.idle = false;
                        }
                    }
                    else if (this.movingUp) {
                        this.body.velocity.y = -200;

                        if (this.facing !== 'up' || this.idle) {
                            this.play('up');
                            this.facing = 'up';
                            this.idle = false;
                        }
                    }
                    else if (this.movingDown) {
                        this.body.velocity.y = 200;

                        if (this.facing !== 'down' || this.idle) {
                            this.play('down');
                            this.facing = 'down';
                            this.idle = false;
                        }
                    }
                    else {
                        this.animations.stop();

                        if (this.facing === 'left') {
                            this.frame = 117;
                        }
                        else if (this.facing === 'right') {
                            this.frame = 143;
                        }
                        else if (this.facing === 'up') {
                            this.frame = 104;
                        }
                        else if (this.facing === 'down') {
                            this.frame = 130;
                        }

                        this.idle = true;
                    }
                }

                setToMoveUp() {
                    this.movingUp = true;
                }
                stopMovingUp() {
                    this.movingUp = false;
                }

                setToMoveDown() {
                    this.movingDown = true;
                }
                stopMovingDown() {
                    this.movingDown = false;
                }

                setToMoveLeft() {
                    this.movingLeft = true;
                }
                stopMovingLeft() {
                    this.movingLeft = false;
                }

                setToMoveRight() {
                    this.movingRight = true;
                }
                stopMovingRight() {
                    this.movingRight = true;
                }
            }
        }
    }
}