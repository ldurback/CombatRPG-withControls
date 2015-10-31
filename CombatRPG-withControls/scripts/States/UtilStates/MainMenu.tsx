///<reference path="../BaseState.ts" />
///<reference path="../Maps/BasicMap.tsx" />

///<reference path="DevMenu.tsx" />

namespace CombatRPG {
    export namespace States {
        export namespace UtilStates {
            export class MainMenu extends BaseState {
                loadAssets() {
                    this.load.image('background', 'assets/images/background.png');

                    this.game.state.add("BasicMap", Maps.BasicMap);
                    this.game.state.add("DevMenu", DevMenu);
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
                    Utils.clearHTMLElement(document.getElementById("main-menu-screen"));
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
}