///<reference path="BaseState.ts" />
///<reference path="Maps/BasicMap.tsx" />

///<reference path="BaseState.ts" />
///<reference path="DevMenu.tsx" />

namespace CombatRPG {
    export namespace States {
        export class MainMenu extends BaseState {
            loadAssets() {
                this.load.image('background', 'assets/images/background.png');

                this.game.state.add("BasicMap", States.Maps.BasicMap);
                this.game.state.add("DevMenu", States.DevMenu);
            }

            initialize() {
                this.add.sprite(0, 0, "background");

                this.renderScreen();
            }

            private renderScreen() {
                var menu = <div><div className={this.game.highlightMenu ? "selectable selected link" : "selectable link"} onClick={ e => this.startGame() }>Start Game</div>
                    <div className="selectable link" onClick={ e => this.startDevMenu() }>Dev Menu</div>
                </div>;
                var target = document.getElementById("main-menu-screen");

                React.render(menu, target);
                $("#main-menu-screen").show();
            }

            private exitScreen() {
                var clear = <div></div>;
                var target = document.getElementById("main-menu-screen");

                React.render(clear, target);
                $("#main-menu-screen").hide();
            }

            private startGame() {
                this.game.state.start("BasicMap", true, false);
            }

            private startDevMenu() {
                this.game.state.start("DevMenu", true, false);
            }

            destroy() {
                this.exitScreen();
            }
        }
    }
}