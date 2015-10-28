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