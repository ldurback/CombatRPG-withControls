///<reference path="../BaseState.ts" />
///<reference path="MainMenu.tsx" />

namespace CombatRPG {
    export namespace States {
        export namespace Util {
            export class SplashScreen extends BaseState {
                loadAssets() {
                    this.game.state.add("MainMenu", MainMenu);
                }

                initialize() {
                    this.renderScreen();
                    this.setupInput();
                }

                private setupInput() {
                    this.game.input.keyboard.addCallbacks(this, this.advanceToNextState);
                }

                addGamepadButtonsStateSpecific() {
                    this.gamepad1.getButton(Phaser.Gamepad.XBOX360_A).onDown.add(() => this.advanceToNextState());
                }

                private tearDownInput() {
                    this.game.input.keyboard.onDownCallback = null;
                }

                removeGamepadButtonsStateSpecific() {
                    this.gamepad1.getButton(Phaser.Gamepad.XBOX360_A).onDown.removeAll();
                }

                private renderScreen() {
                    var splashScreenText = <div><h1>Combat RPG</h1></div>;

                    var target = document.getElementById("splash-screen");

                    React.render(splashScreenText, target);

                    $("#splash-screen").show();

                    $("#splash-screen").on("click", () => { this.advanceToNextState() });
                }

                private exitScreen() {
                    Utils.clearHTMLElement(document.getElementById("splash-screen"));
                    $("#splash-screen").hide();
                }

                private advanceToNextState() {
                    this.game.state.start("MainMenu", true, false);
                }

                destroy() {
                    this.exitScreen();
                    this.tearDownInput();
                }
            }
        }
    }
}