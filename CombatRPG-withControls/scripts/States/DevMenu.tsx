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
            }

            private renderScreen() {
                var menu = <div>
                    <div className={this.game.highlightMenu ? "selectable selected" : "selectable"} onClick={e => { this.goToMainMenu() } }>Main Menu</div>
                </div>;
                var target = document.getElementById("dev-menu-screen");

                React.render(menu, target);
                $("#dev-menu-screen").show();
            }

            private exitScreen() {
                var clear = <div></div>;
                var target = document.getElementById("dev-menu-screen");

                React.render(clear, target);
                $("#dev-menu-screen").hide();
            }

            private goToMainMenu() {
                this.game.state.start("MainMenu", true, false);
            }

            destroy() {
                this.exitScreen();
            }
        }
    }
}