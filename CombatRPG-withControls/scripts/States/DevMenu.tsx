﻿///<reference path="BaseState.ts" />
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
                    <div className="selectable selected" onClick={e => { this.goToMainMenu() } }>Main Menu</div>
                </div>;
                var target = document.getElementById("dev-menu-screen");

                React.render(menu, target);
                $("#dev-menu-screen").show();
            }

            clearScreen() {
                var clear = <div></div>;
                var target = document.getElementById("dev-menu-screen");

                React.render(clear, target);
                $("#dev-menu-screen").hide();
            }

            setupInput() {

            }

            goToMainMenu() {
                this.clearScreen();

                this.game.state.start("MainMenu", true, false);
            }
        }
    }
}