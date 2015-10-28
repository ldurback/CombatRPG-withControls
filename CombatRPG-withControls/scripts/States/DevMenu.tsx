///<reference path="BaseState.ts" />
///<reference path="MainMenu.tsx" />

namespace CombatRPG {
    export namespace States {
        export class DevMenu extends BaseState {
            loadAssets() {
                this.game.state.add("MainMenu", States.MainMenu);
            }

            initialize() {
                this.renderScreen();
                this.setupInput();
            }

            renderScreen() {
                var menu = <div>
                    <div onClick={e => { this.goToMainMenu() } }>Main Menu</div>
                </div>;
                var target = document.getElementById("dev-menu-screen");

                React.render(menu, target);
                $("#dev-menu-screen").show();
            }

            setupInput() {

            }

            goToMainMenu() {
                $("#dev-menu-screen").hide();

                this.game.state.start("MainMenu", true, false);
            }
        }
    }
}