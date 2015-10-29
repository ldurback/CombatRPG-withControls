///<reference path="../../lib/phaser.d.ts" />

///<reference
///<reference path="Entity.ts" />
///<reference path="Weapon.ts" />

namespace CombatRPG {
    export namespace Entities {
        export namespace Battle {
            export class Player extends Entity {
                cursors: Phaser.CursorKeys;
                facing: Direction;
                idle: boolean;
                attacking: boolean;

                moving: {
                    left: boolean;
                    right: boolean;

                    jumping: boolean;
                    attacking: boolean;
                };

                equippedWeapon: Weapon;

                constructor(game: Phaser.Game, x: number, y: number) {
                    super(game, x, y, 'character', 26);

                    this.status = this.game.player.status;
                    this.moving = {
                        left: false,
                        right: false,

                        jumping: false,
                        attacking: false
                    };

                    this.equippedWeapon = new Weapon(game, this);

                    this.attacking = false;
                    this.idle = true;

                    this.anchor.setTo(0.5, 0);

                    game.physics.arcade.enable(this);

                    this.body.collideWorldBounds = true;
                    this.body.setSize(32, 48, 0, 12);

                    this.animations.add('left', [117, 118, 119, 120, 121, 122, 123, 124, 125], 10, true);
                    this.animations.add('right', [143, 144, 145, 146, 147, 148, 149, 150, 151], 10, true);
                    this.animations.add('attackLeft', [169, 170, 171, 172, 173, 174], 20, false);
                    this.animations.add('attackRight', [195, 196, 197, 198, 199, 200], 20, false);

                    game.add.existing(this);

                    this.cursors = game.input.keyboard.createCursorKeys();
                }

                doMotion() {
                    //  Do this AFTER the collide check, or we won't have blocked/touching set
                    var standing = this.body.blocked.down || this.body.touching.down;

                    this.body.velocity.x = 0;

                    if (this.moving.attacking && !this.attacking && !this.invincible) {
                        this.attacking = true;
                        this.idle = true;
                        if (this.facing == Direction.Left) {
                            this.equippedWeapon.activateLeft();
                            this.play('attackLeft').onComplete.addOnce(() => {
                                this.attacking = false;
                                this.equippedWeapon.deactivate();
                            });
                        }
                        else {
                            this.equippedWeapon.activateRight();
                            this.play('attackRight').onComplete.addOnce(() => {
                                this.attacking = false;
                                this.equippedWeapon.deactivate();
                            });
                        }
                    }

                    if (!this.attacking) {

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
                        else {
                            this.animations.stop();

                            if (this.facing == Direction.Left) {
                                this.frame = 117;
                            }
                            else {
                                this.frame = 143;
                            }

                            this.idle = true;
                        }

                        if (standing && this.moving.jumping) {
                            this.body.velocity.y = -500;
                        }
                    }
                }

                setToAttack() {
                    this.moving.attacking = true;
                }
                stopAttacking() {
                    this.moving.attacking = false;
                }

                setToJump() {
                    this.moving.jumping = true;
                }
                stopJumping() {
                    this.moving.jumping = false;
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