///<reference path="states/Boot.ts" />

namespace Phaser {
    export interface Game {
        highlightMenu: boolean;
        showVirtualGamepad: boolean;

        player: {
            status: CombatRPG.Entities.Battle.Status;
            gold: number;
            battleEntity: CombatRPG.Entities.Battle.Entity;
        }

        statusMenu: CombatRPG.Screens.StatusMenu;
    }
}

namespace CombatRPG {
    export class Game extends Phaser.Game {
        constructor() {
            super(800, 600, Phaser.AUTO, 'content', null);

            this.state.add("Boot", States.Boot);

            this.player = {
                status: {
                    currentHP: 10,
                    maxHP: 10,
                    strength: 2,
                    defense: 2
                },

                gold: 0,

                battleEntity: null
            };

            this.statusMenu = new Screens.StatusMenu(this);

            this.state.start("Boot");
        }
    }
}