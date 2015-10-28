///<reference path="../../Entities/Map/Player.ts" />

namespace CombatRPG {
    export namespace States {
        export namespace Maps {
            export class EmptyMap extends Phaser.State {
                preload() {
                    this.load.spritesheet("character", "/assets/images/character.png", 64, 64);
                }
                create() {
                    new Entities.Map.Player(this.game, 50, 50);
                }
            }
        }
    }
}