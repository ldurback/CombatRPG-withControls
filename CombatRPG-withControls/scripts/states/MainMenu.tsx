namespace CombatRPG {
    export namespace States {
        export class MainMenu extends Phaser.State {
            preload() {
                this.load.image('background', 'assets/images/background.png');
            }

            create() {
                this.add.sprite(0, 0, "background");
                var menuButton = <button type="button">Start Game</button>;
                var target = document.getElementById("main-menu-screen");

                React.render(menuButton, target);
                $(menuButton).click("#splash-screen"); 
            }

        }
    }
}