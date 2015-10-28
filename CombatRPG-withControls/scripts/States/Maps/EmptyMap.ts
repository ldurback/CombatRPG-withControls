///<reference path="../../Entities/Map/Player.ts" />
///<reference path="../BaseState.ts" />

namespace CombatRPG {
    export namespace States {
        export namespace Maps {
            export class EmptyMap extends BaseState {
                player: Entities.Map.Player;

                loadAssets() {
                    this.load.spritesheet("character", "/assets/images/character.png", 64, 64);
                }
                initialize() {
                    this.player = new Entities.Map.Player(this.game, 50, 50);

                    this.setupInput();
                }

                private setupInput() {
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