///<reference path="../../Entities/Map/Player.ts" />
///<reference path="../BaseState.ts" />

namespace CombatRPG {
    export namespace States {
        export namespace Maps {
            export class EmptyMap extends BaseState {
                player: Entities.Map.Player;

                preload() {
                    this.load.spritesheet("character", "/assets/images/character.png", 64, 64);
                }
                initialize() {
                    this.player = new Entities.Map.Player(this.game, 50, 50);
                }

                keyDown(event: KeyboardEvent) {
                    if (event.keyCode == 37) // left key
                        this.player.setToMoveLeft();
                    if (event.keyCode == 38) // up key
                        this.player.setToMoveUp();
                    if (event.keyCode == 39) // right key
                        this.player.setToMoveRight();
                    if (event.keyCode == 40) // down key
                        this.player.setToMoveDown();
                }

                keyUp(event: KeyboardEvent) {
                    if (event.keyCode == 37) // left key
                        this.player.stopMovingLeft();
                    if (event.keyCode == 38) // up key
                        this.player.stopMovingUp();
                    if (event.keyCode == 39) // right key
                        this.player.stopMovingRight();
                    if (event.keyCode == 40) // down key
                        this.player.stopMovingDown();
                }
            }
        }
    }
}