namespace CombatRPG {
    export namespace States {
        export class MainMenu extends Phaser.State {
            Create() {
                this.load.image('background', 'assets/images/background.png');
                this.add.sprite(0, 0, "background");
            }

        }
    }
}