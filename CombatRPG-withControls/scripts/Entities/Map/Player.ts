namespace CombatRPG {
    export namespace Entities {
        export namespace Map {
            export class Player extends Phaser.Sprite {
                facing: Direction;
                idle: boolean;

                private moving: {
                    up: boolean,
                    down: boolean,
                    left: boolean,
                    right: boolean
                }

                constructor(game: Phaser.Game, x: number, y: number) {
                    super(game, x, y, 'character', 104);

                    this.idle = true;

                    this.moving = {
                        up: false,
                        down: false,
                        left: false,
                        right: false
                    };

                    this.anchor.setTo(0.5, 0);

                    game.physics.arcade.enable(this);

                    this.body.collideWorldBounds = true;
                    this.body.setSize(32, 48, 0, 12);

                    this.animations.add('up', [104, 105, 106, 107, 108, 109, 110, 111, 112], 10, true);
                    this.animations.add('left', [117, 118, 119, 120, 121, 122, 123, 124, 125], 10, true);
                    this.animations.add('down', [130, 131, 132, 133, 134, 135, 136, 137, 138], 10, true);
                    this.animations.add('right', [143, 144, 145, 146, 147, 148, 149, 150, 151], 10, true);

                    game.add.existing(this);
                }

                update() {
                    this.body.velocity.x = 0;
                    this.body.velocity.y = 0;

                    if (this.moving.left) {
                        this.body.velocity.x = -200;

                        if (this.facing != Direction.Left || this.idle) {
                            this.play('left');
                            this.facing = Direction.Left;
                            this.idle = false;
                        }
                    }
                    else if (this.moving.right) {
                        this.body.velocity.x = 200;

                        if (this.facing != Direction.Right || this.idle) {
                            this.play('right');
                            this.facing = Direction.Right;
                            this.idle = false;
                        }
                    }
                    else if (this.moving.up) {
                        this.body.velocity.y = -200;

                        if (this.facing != Direction.Up || this.idle) {
                            this.play('up');
                            this.facing = Direction.Up;
                            this.idle = false;
                        }
                    }
                    else if (this.moving.down) {
                        this.body.velocity.y = 200;

                        if (this.facing != Direction.Down || this.idle) {
                            this.play('down');
                            this.facing = Direction.Down;
                            this.idle = false;
                        }
                    }
                    else {
                        this.animations.stop();

                        if (this.facing == Direction.Left) {
                            this.frame = 117;
                        }
                        else if (this.facing == Direction.Right) {
                            this.frame = 143;
                        }
                        else if (this.facing == Direction.Up) {
                            this.frame = 104;
                        }
                        else if (this.facing == Direction.Down) {
                            this.frame = 130;
                        }

                        this.idle = true;
                    }
                }

                setToMoveUp() {
                    this.moving.up = true;
                }
                stopMovingUp() {
                    this.moving.up = false;
                }

                setToMoveDown() {
                    this.moving.down = true;
                }
                stopMovingDown() {
                    this.moving.down = false;
                }

                setToMoveLeft() {
                    this.moving.left = true;
                }
                stopMovingLeft() {
                    this.moving.left = false;
                }

                setToMoveRight() {
                    this.moving.right = true;
                }
                stopMovingRight() {
                    this.moving.right = false;
                }
            }
        }
    }
}