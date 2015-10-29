///<reference path="States/Boot.ts" />
///<rerefence path="Entities/Battle/Status.ts" />
///<reference path="Entities/Battle/Entity.ts" />
///<reference path="Screens/StatusMenu.tsx" />

namespace Phaser {
    export interface Game {
        highlightMenu: boolean;
        showVirtualGamepad: boolean;

        player: {
            status: CombatRPG.Entities.Battle.Status;
            gold: number;
            items: Map<string, number>;

            battleEntity: CombatRPG.Entities.Battle.Entity;
        }

        loot: {
            gold: number;
            items: Map<string, number>;
        }

        return: {
            state: string;
            position: {
                x: number;
                y: number;
            };
        }

        inBattle: boolean;

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
                items: new Map<string, number>(),

                battleEntity: null
            };

            this.loot = {
                gold: 0,
                items: new Map<string, number>()
            };

            this.return = {
                state: null,
                position: {
                    x: null,
                    y: null
                }
            };

            this.statusMenu = new Screens.StatusMenu(this);

            this.state.start("Boot");
        }
    }
}