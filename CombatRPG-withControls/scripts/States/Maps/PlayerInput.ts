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

                    this.cursors.left.onDown.add(this.onKeyLeftPress, this);
                    this.cursors.left.onUp.add(this.onKeyLeftLift, this);

                    this.cursors.up.onDown.add(this.onKeyUpPress, this);
                    this.cursors.up.onUp.add(this.onKeyUpLift, this);

                    this.cursors.right.onDown.add(this.onKeyRightPress, this);
                    this.cursors.right.onUp.add(this.onKeyRightLift, this);

                    this.cursors.down.onDown.add(this.onKeyDownPress, this);
                    this.cursors.down.onUp.add(this.onKeyDownLift, this);
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
                }

                private onKeyLeftLift() {
                    this.player.stopMovingLeft();
                }

                private onKeyUpLift() {
                    this.player.stopMovingUp();
                }

                private onKeyRightLift() {
                    this.player.stopMovingRight();
                }

                private onKeyDownLift() {
                    this.player.stopMovingDown();
                }

                private onKeyLeftPress() {
                    this.player.setToMoveLeft();
                }

                private onKeyUpPress() {
                    this.player.setToMoveUp();
                }

                private onKeyRightPress() {
                    this.player.setToMoveRight();
                }

                private onKeyDownPress() {
                    this.player.setToMoveDown();
                }
            }
        }
    }
}