///<reference path="BaseState.ts" />
///<reference path="Maps/EmptyMap.ts" />

///<reference path="BaseState.ts" />

namespace CombatRPG {
    export namespace States {
        export class MainMenu extends BaseState {
            preload() {
                this.load.image('background', 'assets/images/background.png');

                this.game.state.add("Map", States.Maps.EmptyMap);
            }

            initialize() {
                this.add.sprite(0, 0, "background");

                var menu = <button onClick={ e => this.advanceToNextState() }>Start Game</button>;
                var target = document.getElementById("main-menu-screen");

                React.render(menu, target);
                $("#main-menu-screen").show();
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