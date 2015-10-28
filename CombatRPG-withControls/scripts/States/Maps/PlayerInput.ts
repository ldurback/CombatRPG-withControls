///<reference path="../../Entities/Map/Player.ts" />

namespace CombatRPG {
    export namespace States {
        export namespace Maps {
            export class PlayerInput {
                player: Entities.Map.Player;
                game: Phaser.Game;

                constructor(game: Phaser.Game, player: Entities.Map.Player) {
                    this.player = player;
                    this.game = game;

                    var cursors = this.game.input.keyboard.createCursorKeys();

                    cursors.left.onDown.add(this.onKeyLeftPress, this);
                    cursors.left.onUp.add(this.onKeyLeftLift, this);

                    cursors.up.onDown.add(this.onKeyUpPress, this);
                    cursors.up.onUp.add(this.onKeyUpLift, this);

                    cursors.right.onDown.add(this.onKeyRightPress, this);
                    cursors.right.onUp.add(this.onKeyRightLift, this);

                    cursors.down.onDown.add(this.onKeyDownPress, this);
                    cursors.down.onUp.add(this.onKeyDownLift, this);
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