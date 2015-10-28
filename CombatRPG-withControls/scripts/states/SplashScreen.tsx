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
                this.game.input.keyboard.addCallbacks(this, this.advanceToNextState);
                $("#virtual-gamepad-button-action").on("click", () => this.advanceToNextState());
            }

            addGamepadButtonsStateSpecific() {
                this.gamepad1.getButton(Phaser.Gamepad.XBOX360_A).onDown.add(() => this.advanceToNextState());
            }

            private tearDownInput() {
                this.game.input.keyboard.onDownCallback = null;
                $("#virtual-gamepad-button-action").off("click");
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
                var clear = <div></div>;
                var target = document.getElementById("splash-screen");

                React.render(clear, target);
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