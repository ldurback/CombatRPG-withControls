///<reference path="states/Boot.ts" />

namespace Phaser {
    export interface Game {
        highlightMenu: boolean;
    }
}

namespace CombatRPG {
    export class Game extends Phaser.Game {
        constructor() {
            super(800, 600, Phaser.AUTO, 'content', null);

            this.state.add("Boot", States.Boot);

            this.highlightMenu = false;

            this.state.start("Boot");
        }
    }
}