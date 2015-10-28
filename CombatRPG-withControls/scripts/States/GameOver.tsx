///<reference path="BaseState.ts" />

namespace CombatRPG {
    export namespace States {
        export class GameOverScreen extends BaseState {
              initialize() {

                var gameOverText = <div><h1>Game Over, Click to start again!</h1></div>;

                var target = document.getElementById("game-over-screen");

                React.render(gameOverText, target);

                $("#game-over-screen").show();

                $("#game-over-screen").on("click", () => {
                    $("#game-over-screen").hide();

                    this.game.state.start("MainMenu", true, false);
                });
            }

              advanceToNextState() {
                  $("#main-menu-screen").hide();

                  this.game.state.start("Map", true, false);
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