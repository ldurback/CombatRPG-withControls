///<reference path="BaseState.ts" />
///<reference path="Maps/EmptyMap.ts" />

///<reference path="BaseState.ts" />
///<reference path="Maps/EmptyMap.ts" />

namespace CombatRPG {
    export namespace States {
        export class MainMenu extends BaseState {
            loadAssets() {
                this.load.image('background', 'assets/images/background.png');

                this.game.state.add("EmptyMap", States.Maps.EmptyMap);
            }

            initialize() {
                this.add.sprite(0, 0, "background");

                this.renderScreen();
                this.setupInput();
            }

            renderScreen() {
                var menu = <button onClick={ e => this.advanceToNextState() }>Start Game</button>;
                var target = document.getElementById("main-menu-screen");

                React.render(menu, target);
                $("#main-menu-screen").show();
            }

            setupInput() {
                this.game.input.keyboard.addCallbacks(this, null, null, this.onKeyPress);
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