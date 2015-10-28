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

            private setupInput() {
                this.game.input.keyboard.addCallbacks(this, this.onKeyDown);
            }

            private renderScreen() {
                var splashScreenText = <div><h1>Combat RPG</h1></div>;

                var target = document.getElementById("splash-screen");

                React.render(splashScreenText, target);

                $("#splash-screen").show();

                $("#splash-screen").on("click", () => { this.advanceToNextState() });
            }

            private exitScreen() {
                var clear = <div></div>;
                var target = document.getElementById("splash-screen");

                React.render(clear, target);
                $("#splash-screen").hide();

                this.game.input.keyboard.onDownCallback = null;
            }

            private advanceToNextState() {
                this.exitScreen();

                this.game.state.start("MainMenu", true, false);
            }

            private onKeyDown(event: KeyboardEvent) {
                this.advanceToNextState();
            }
        }
    }
}