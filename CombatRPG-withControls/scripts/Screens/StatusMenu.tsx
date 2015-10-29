///<reference path="MenuScreen.ts" />

namespace CombatRPG {
    export namespace Screens {
        export class StatusMenu {
            private game: Phaser.Game;

            constructor(game: Phaser.Game) {
                this.game = game;
            }

            public showMenu() {
                this.game.paused = true;
                this.createMenu();
            }

            private createMenu() {
                var statusMenuText = (<div><b>Status Menu</b>
                    <div> HP: {this.game.player.status.currentHP}/{this.game.player.status.maxHP}</div>
                    <div>Strength: {this.game.player.status.strength}</div>
                    <div> Defense: {this.game.player.status.defense}</div>
                    <br/>
                    <div>Gold: {this.game.player.gold}</div>
                    <hr/>
                    <div className="link" onClick={e => this.closeMenu() }>Close</div>
                    </div>);

                var target = document.getElementById("status-menu-screen");

                React.render(statusMenuText, target);

                $("#status-menu-screen").show();
            }

            private closeMenu() {
                $("#status-menu-screen").hide();
                this.game.paused = false;
            }
        }
    }
}