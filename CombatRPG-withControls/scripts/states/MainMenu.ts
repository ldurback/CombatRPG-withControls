namespace CombatRPG {
    export namespace States {
        export class MainMenu extends Phaser.State {
            preload() {
                this.load.image('background', 'assets/images/background.png');
            }

            create() {

                this.add.sprite(0, 0, "background");
            }

        }
    }
}