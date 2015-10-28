///<reference path="../../Entities/Map/Player.ts" />
///<reference path="../BaseState.ts" />

namespace CombatRPG {
    export namespace States {
        export namespace Maps {
            export class EmptyMap extends BaseState {
                player: Entities.Map.Player;
                playerInput: PlayerInput;

                loadAssets() {
                    this.load.spritesheet("character", "/assets/images/character.png", 64, 64);
                }
                initialize() {
                    this.player = new Entities.Map.Player(this.game, 50, 50);
                    this.playerInput = new PlayerInput(this.game, this.player);
                }
            }
        }
    }
}