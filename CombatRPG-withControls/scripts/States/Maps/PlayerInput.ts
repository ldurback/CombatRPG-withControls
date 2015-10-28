///<reference path="../../Entities/Map/Player.ts" />

namespace CombatRPG {
    export namespace States {
        export namespace Maps {
            export class PlayerInput {
                player: Entities.Map.Player;
                game: Phaser.Game;
                cursors: Phaser.CursorKeys;

                constructor(game: Phaser.Game, player: Entities.Map.Player) {
                    this.player = player;
                    this.game = game;

                    this.cursors = this.game.input.keyboard.createCursorKeys();

                    this.cursors.left.onDown.add(() => this.player.setToMoveLeft());
                    $("#virtual-gamepad-left").on("mousedown", () => this.player.setToMoveLeft());
                    this.cursors.left.onUp.add(() => this.player.stopMovingLeft());
                    $("#virtual-gamepad-left").on("mouseup", () => this.player.stopMovingLeft());

                    this.cursors.up.onDown.add(() => this.player.setToMoveUp());
                    $("#virtual-gamepad-up").on("mousedown", () => this.player.setToMoveUp());
                    this.cursors.up.onUp.add(() => this.player.stopMovingUp());
                    $("#virtual-gamepad-up").on("mouseup", () => this.player.stopMovingUp());

                    this.cursors.right.onDown.add(() => this.player.setToMoveRight());
                    $("#virtual-gamepad-right").on("mousedown", () => this.player.setToMoveRight());
                    this.cursors.right.onUp.add(() => this.player.stopMovingRight());
                    $("#virtual-gamepad-right").on("mouseup", () => this.player.stopMovingRight());

                    this.cursors.down.onDown.add(() => this.player.setToMoveDown());
                    $("#virtual-gamepad-down").on("mousedown", () => this.player.setToMoveDown());
                    this.cursors.down.onUp.add(() => this.player.stopMovingDown());
                    $("#virtual-gamepad-down").on("mouseup", () => this.player.stopMovingDown());
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
                    $("#virtual-gamepad-down").off("mousedown");
                    $("#virtual-gamepad-down").off("mouseup");

                    this.cursors.up.onDown.removeAll(this);
                    this.cursors.up.onUp.removeAll(this);
                    $("#virtual-gamepad-up").off("mousedown");
                    $("#virtual-gamepad-up").off("mouseup");

                    this.cursors.left.onDown.removeAll(this);
                    this.cursors.left.onUp.removeAll(this);
                    $("#virtual-gamepad-left").off("mousedown");
                    $("#virtual-gamepad-left").off("mouseup");

                    this.cursors.right.onDown.removeAll(this);
                    this.cursors.right.onUp.removeAll(this);
                    $("#virtual-gamepad-right").off("mousedown");
                    $("#virtual-gamepad-right").off("mouseup");
                }
            }
        }
    }
}