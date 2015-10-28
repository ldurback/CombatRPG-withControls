///<reference path="Maps/EmptyMap.ts" />

namespace CombatRPG {
    export namespace States {
        export class MainMenu extends Phaser.State {
            preload() {
                this.load.image('background', 'assets/images/background.png');

                this.game.state.add("Map", States.Maps.EmptyMap);
            }

            create() {
                this.add.sprite(0, 0, "background");

                var menu = <button onClick={ e => {
                    $("#main-menu-screen").hide();

                    this.game.state.start("Map", true, false);
                } }>Start Game</button>;
                var target = document.getElementById("main-menu-screen");

                React.render(menu, target);
                $("#main-menu-screen").show();
            }

        }
    }
}