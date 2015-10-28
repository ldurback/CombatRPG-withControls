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
                this.game.input.keyboard.addCallbacks(this, null, null, this.onKeyPress);
            }

            renderScreen() {
                var gameOverText = <div><h1>Game Over, Click to start again!</h1></div>;

                var target = document.getElementById("game-over-screen");

                React.render(gameOverText, target);

                $("#game-over-screen").show();

                $("#game-over-screen").on("click", () => { this.advanceToNextState() });
            }

            advanceToNextState() {
                  $("#main-menu-screen").hide();

                  this.game.state.start("EmptyMap", true, false);
            }

            onKeyPress(event: KeyboardEvent) {
                this.advanceToNextState();
            }
        }
    }
}