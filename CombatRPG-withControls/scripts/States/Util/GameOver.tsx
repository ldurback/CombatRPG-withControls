///<reference path="../BaseState.ts" />
///<reference path="MainMenu.tsx" />

namespace CombatRPG {
    export namespace States {
        export namespace Util {
            export class GameOver extends BaseState {
                loadAssets() { }

                initialize() {
                    this.renderScreen();
                    this.setupInput();
                }

                setupInput() {
                    this.game.input.keyboard.addCallbacks(this, () => this.advanceToNextState());
                }

                addGamepadButtonsStateSpecific(gamepad: Phaser.SinglePad) {
                    gamepad.getButton(Phaser.Gamepad.XBOX360_A).onDown.add(() => this.advanceToNextState());
                }

                tearDownInput() {
                    this.game.input.keyboard.onDownCallback = null;
                }

                removeGamepadButtonsStateSpecific(gamepad: Phaser.SinglePad) {
                    gamepad.getButton(Phaser.Gamepad.XBOX360_A).onDown.removeAll();
                }

                private renderScreen() {
                    var gameOverText = <div><h1>Game Over, Click to start again!</h1></div>;

                    var target = document.getElementById("game-over-screen");

                    React.render(gameOverText, target);

                    $("#game-over-screen").show();

                    $("#game-over-screen").on("click", () => { this.advanceToNextState() });
                }

                private exitScreen() {
                    Utils.clearHTMLElement(document.getElementById("game-over-screen"));
                    $("#game-over-screen").hide();
                }

                private advanceToNextState() {
                    this.game.state.start("SplashScreen", true, false);
                }

                destroy() {
                    this.exitScreen();
                    this.tearDownInput();
                }
            }
        }
    }
}