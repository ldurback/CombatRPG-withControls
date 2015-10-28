///<reference path="BaseState.ts" />

namespace CombatRPG {
    export namespace States {
        export class GameOverScreen extends BaseState {
            loadAssets() { }

            initialize() {
                this.renderScreen();
                this.setupInput();                
            }

            setupInput() {
                this.game.input.keyboard.addCallbacks(this, this.onKeyDown);
            }

            private renderScreen() {
                var gameOverText = <div><h1>Game Over, Click to start again!</h1></div>;

                var target = document.getElementById("game-over-screen");

                React.render(gameOverText, target);

                $("#game-over-screen").show();

                $("#game-over-screen").on("click", () => { this.advanceToNextState() });
            }

            private exitScreen() {
                var clear = <div></div>;
                var target = document.getElementById("game-over-screen");

                React.render(clear, target);
                $("#game-over-screen").hide();

                this.game.input.keyboard.onDownCallback = null;
            }

            private advanceToNextState() {
                this.exitScreen();
                this.game.state.start("EmptyMap", true, false);
            }

            private onKeyDown(event: KeyboardEvent) {
                this.advanceToNextState();
            }
        }
    }
}