///<reference path="../../Entities/Map/Player.ts" />

namespace CombatRPG {
    export namespace States {
        export namespace Maps {
            export class PlayerInput {
                player: Entities.Map.Player;
                game: Phaser.Game;
                cursors: Phaser.CursorKeys;
                virtualGamepad: VirtualGamepad;

                constructor(game: Phaser.Game, player: Entities.Map.Player, virtualGamepad?: VirtualGamepad) {
                    this.player = player;
                    this.game = game;
                    this.virtualGamepad = virtualGamepad;

                    this.cursors = this.game.input.keyboard.createCursorKeys();

                    this.cursors.left.onDown.add(() => this.player.setToMoveLeft());
                    this.cursors.left.onUp.add(() => this.player.stopMovingLeft());

                    this.cursors.up.onDown.add(() => this.player.setToMoveUp());
                    this.cursors.up.onUp.add(() => this.player.stopMovingUp());

                    this.cursors.right.onDown.add(() => this.player.setToMoveRight());
                    this.cursors.right.onUp.add(() => this.player.stopMovingRight());

                    this.cursors.down.onDown.add(() => this.player.setToMoveDown());
                    this.cursors.down.onUp.add(() => this.player.stopMovingDown());

                    if (this.virtualGamepad) {
                        virtualGamepad.left.onInputDown.add(() => this.player.setToMoveLeft());
                        virtualGamepad.left.onInputUp.add(() => this.player.stopMovingLeft());

                        virtualGamepad.up.onInputDown.add(() => this.player.setToMoveUp());
                        virtualGamepad.up.onInputUp.add(() => this.player.stopMovingUp());

                        virtualGamepad.right.onInputDown.add(() => this.player.setToMoveRight());
                        virtualGamepad.right.onInputUp.add(() => this.player.stopMovingRight());

                        virtualGamepad.down.onInputDown.add(() => this.player.setToMoveDown());
                        virtualGamepad.down.onInputUp.add(() => this.player.stopMovingDown());
                    }
                }

                addGamepadButtons(gamepad: Phaser.SinglePad) {
                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_LEFT).onDown.add(() => this.player.setToMoveLeft());
                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_LEFT).onUp.add(() => this.player.stopMovingLeft());

                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_UP).onDown.add(() => this.player.setToMoveUp());
                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_UP).onUp.add(() => this.player.stopMovingUp());

                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_RIGHT).onDown.add(() => this.player.setToMoveRight());
                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_RIGHT).onUp.add(() => this.player.stopMovingRight());

                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_DOWN).onDown.add(() => this.player.setToMoveDown());
                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_DOWN).onUp.add(() => this.player.stopMovingDown());
                }

                removeGamepadButtons(gamepad: Phaser.SinglePad) {
                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_LEFT).onDown.removeAll();
                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_LEFT).onUp.removeAll();
                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_UP).onDown.removeAll();
                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_UP).onUp.removeAll();
                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_RIGHT).onDown.removeAll();
                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_RIGHT).onUp.removeAll();
                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_DOWN).onDown.removeAll();
                    gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_DOWN).onUp.removeAll();
                }

                destroy() {
                    this.cursors.down.onDown.removeAll(this);
                    this.cursors.down.onUp.removeAll(this);

                    this.cursors.up.onDown.removeAll(this);
                    this.cursors.up.onUp.removeAll(this);

                    this.cursors.left.onDown.removeAll(this);
                    this.cursors.left.onUp.removeAll(this);

                    this.cursors.right.onDown.removeAll(this);
                    this.cursors.right.onUp.removeAll(this);

                    if (this.virtualGamepad) {
                        this.virtualGamepad.down.onInputDown.removeAll();
                        this.virtualGamepad.down.onInputUp.removeAll();

                        this.virtualGamepad.up.onInputDown.removeAll();
                        this.virtualGamepad.up.onInputUp.removeAll();

                        this.virtualGamepad.left.onInputDown.removeAll();
                        this.virtualGamepad.left.onInputUp.removeAll();

                        this.virtualGamepad.right.onInputDown.removeAll();
                        this.virtualGamepad.right.onInputUp.removeAll();
                    }
                }
            }
        }
    }
}