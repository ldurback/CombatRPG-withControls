namespace CombatRPG {
    export namespace States {
        export class SplashScreen extends BaseState {
            preload() {
                this.game.state.add("MainMenu", States.MainMenu);
            }

            initialize() {
                var splashScreenText = <div><h1>Combat RPG</h1></div>;

                var target = document.getElementById("splash-screen");

                React.render(splashScreenText, target);

                $("#splash-screen").show();

                $("#splash-screen").on("click", this.advanceToNextState);
            }

            advanceToNextState() {
                $("#splash-screen").hide();

                this.game.state.start("MainMenu", true, false);
            }

            keyDown(event: KeyboardEvent) {
                this.advanceToNextState();
            }

            keyUp(event: KeyboardEvent) {
                this.advanceToNextState();
            }
        }
    }
}