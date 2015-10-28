///<reference path="BaseState.ts" />
///<reference path="Maps/EmptyMap.ts" />

///<reference path="BaseState.ts" />
///<reference path="Maps/EmptyMap.ts" />
///<reference path="DevMenu.tsx" />

namespace CombatRPG {
    export namespace States {
        export class MainMenu extends BaseState {
            loadAssets() {
                this.load.image('background', 'assets/images/background.png');

                this.game.state.add("EmptyMap", States.Maps.EmptyMap);
                this.game.state.add("DevMenu", States.DevMenu);
            }

            initialize() {
                this.add.sprite(0, 0, "background");

                this.renderScreen();
                this.setupInput();
            }

            renderScreen() {
                var menu = <div><button onClick={ e => this.startGame() }>Start Game</button>
                    <button onClick={ e => this.startDevMenu() }>Dev Menu</button>
                </div>;
                var target = document.getElementById("main-menu-screen");

                React.render(menu, target);
                $("#main-menu-screen").show();
            }

            setupInput() {
            }

            startGame() {
                $("#main-menu-screen").hide();

                this.game.state.start("EmptyMap", true, false);
            }

            startDevMenu() {
                $("#main-menu-screen").hide();

                this.game.state.start("DevMenu", true, false);
            }
        }
    }
}