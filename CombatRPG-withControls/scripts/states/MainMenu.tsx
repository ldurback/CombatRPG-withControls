namespace CombatRPG {
    export namespace States {
        export class MainMenu extends Phaser.State {
            preload() {
                this.load.image('background', 'assets/images/background.png');
                this.load.image("loader", "assets/images/loader.png");

                this.game.state.add("Map", States.Map);
            }

            create() {
                this.add.sprite(0, 0, "background");
                var menuButton = <button onClick={ e => {
                    $("#main-menu-screen").hide();

                    this.game.state.start("Map", true, false);
                } }>Start Game</button>;
                var target = document.getElementById("main-menu-screen");

                React.render(menuButton, target);
                $("#main-menu-screen").show();
            }

        }
    }
}