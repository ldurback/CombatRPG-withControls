///<reference path="MenuScreen.ts" />
///<reference path="Inventory.tsx" />

namespace CombatRPG {
    export namespace Screens {
        export class StatusMenu {
            private game: Phaser.Game;

            inMenu: boolean = false;

            inventory: Inventory;

            constructor(game: Phaser.Game) {
                this.game = game;
                this.inventory = new Inventory(game);
            }

            public showMenu() {
                this.game.paused = true;
                this.inMenu = true;

                this.createMenu();
            }

            private createMenu() {
                var statusMenuText = (<div><b>Status Menu</b>
                    <div> HP: {this.game.player.status.currentHP}/{this.game.player.status.maxHP}</div>
                    <div>Strength: {this.game.player.status.strength}</div>
                    <div> Defense: {this.game.player.status.defense}</div>
                    <br/>
                    <div>Gold: {this.game.player.gold}</div>
                    <div className={this.game.highlightMenu ? "link selectable selected" : "link selectable"} onClick={e => {
                        this.closeMenu();
                        this.inventory.showMenu()
                    } }>Inventory</div>
                    <hr/>
                    <div className="link selectable" onClick={e => this.closeMenu() }>Close</div>
                    </div>);

                var target = document.getElementById("status-menu-screen");

                React.render(statusMenuText, target);

                $("#status-menu-screen").show();
            }

            private closeMenu() {
                var clear = <div></div>;
                var target = document.getElementById("status-menu-screen");

                React.render(clear, target);

                $("#status-menu-screen").hide();
                this.inMenu = false;
                this.game.paused = false;
            }
        }
    }
}