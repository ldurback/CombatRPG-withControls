namespace CombatRPG {
    export namespace States {
        export class GameOverScreen extends Phaser.State {
            create() {

                var gameOverText = <div><h1>Game Over, Click to start again!</h1></div>;

                var target = document.getElementById("game-over-screen");

                React.render(gameOverText, target);

                $("#game-over-screen").show();

                $("#game-over-screen").on("click", () => {
                    $("#game-over-screen").hide();

                    this.game.state.start("MainMenu", true, false);
                });
            }

            advanceToMainMenu() {
            }
        }
    }
}