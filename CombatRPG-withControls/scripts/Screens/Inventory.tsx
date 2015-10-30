﻿///<reference path="../ReactComponents/ItemInventoryTable.tsx" />

namespace CombatRPG {
    export namespace Screens {
        export class Inventory {
            private game: Phaser.Game;

            constructor(game: Phaser.Game) {
                this.game = game;
            }

            public showMenu() {
                this.createMenu();
            }

            private createMenu() {
                var statusMenuText = (<div><b>Inventory</b>
                    <ReactComponents.ItemInventoryTable source={this.game.player.items} allowUse={true}
                        disableUnusableInBattle={this.game.inBattle}
                        disableUnusableOutsideBattle={!this.game.inBattle}
                        itemClassName="selectable link"
                        game={this.game} />
                    <hr />
                    <div className="link selectable" onClick={e => this.closeMenu() }>Close</div>
                </div>);

                var target = document.getElementById("status-menu-screen");
                React.render(statusMenuText, target);

                Utils.UINavigator.selectFirstSelectable();

                $("#status-menu-screen").show();
            }

            private closeMenu() {
                Utils.clearHTMLElement(document.getElementById("status-menu-screen"));
                $("#status-menu-screen").hide();
                this.game.statusMenu.showMenu();
            }
        }
    }
}