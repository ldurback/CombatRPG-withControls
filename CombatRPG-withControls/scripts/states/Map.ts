﻿namespace CombatRPG {
    export namespace States {
        export class Map extends Phaser.State {
            preload() {
                this.load.spritesheet("character", "/assets/images/character.png", 64, 64);
            }
            create() {
                
            }
        }
    }
}