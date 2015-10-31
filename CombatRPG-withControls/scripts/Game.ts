///<reference path="States/Util/Boot.ts" />
///<rerefence path="Entities/Battle/Status.ts" />
///<reference path="Entities/Battle/Entity.ts" />
///<reference path="Screens/StatusMenu.tsx" />
///<reference path="Utils/GameData.ts" />

namespace Phaser {
    export interface Game {
        highlightMenu: boolean;
        showVirtualGamepad: boolean;
        data: CombatRPG.Utils.GameData;

        loot: {
            gold: number;
            items: Map<string, number>;
        }

        inBattle: boolean;

        statusMenu: CombatRPG.Screens.StatusMenu;
    }
}

namespace CombatRPG {
    export class Game extends Phaser.Game {
        constructor() {
            super(800, 600, Phaser.AUTO, 'content', null);

            this.state.add("Boot", States.Util.Boot);

            this.data = {
                player: {
                    status: {
                        currentHP: 10,
                        maxHP: 10,
                        strength: 2,
                        defense: 2
                    },

                    gold: 100,
                    items: new Map<string, number>(),

                    battleEntity: null
                },

                return: {
                    state: null,
                    position: {
                        x: null,
                        y: null
                    }
                }
            };

            this.loot = {
                gold: 0,
                items: new Map<string, number>()
            };

            this.data.player.items.set("Potion", 2);

            this.statusMenu = new Screens.StatusMenu(this);

            this.state.start("Boot");
        }
    }

    export var game: Phaser.Game;
}