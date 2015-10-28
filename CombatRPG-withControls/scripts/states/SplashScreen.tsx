///<reference path="BaseState.ts" />
///<reference path="MainMenu.tsx" />

namespace CombatRPG {
    export namespace States {
        export class SplashScreen extends BaseState {
            loadAssets() {
                this.game.state.add("MainMenu", States.MainMenu);
            }

            initialize() {
                this.renderScreen();
                this.setupInput();
            }

            setupInput() {
                this.game.input.keyboard.addCallbacks(this, this.onKeyDown);
            }

            renderScreen() {
                var splashScreenText = <div><h1>Combat RPG</h1></div>;

                var target = document.getElementById("splash-screen");

                React.render(splashScreenText, target);

                $("#splash-screen").show();

                $("#splash-screen").on("click", () => { this.advanceToNextState() });
            }

            clearScreen() {
                var clear = <div></div>;
                var target = document.getElementById("splash-screen");

                React.render(clear, target);
                $("#splash-screen").hide();
            }

            advanceToNextState() {
                this.clearScreen();

                this.game.state.start("MainMenu", true, false);
            }

            onKeyDown(event: KeyboardEvent) {
                this.advanceToNextState();
                this.game.input.keyboard.onDownCallback = null;
            }
        }
    }
}