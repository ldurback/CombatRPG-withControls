namespace CombatRPG {
    export namespace States {
        export abstract class BaseState extends Phaser.State {
            create() {
                this.setUpInput();

                this.initialize();
            }
            
            abstract initialize();

            private setUpInput() {
                this.game.input.keyboard.addCallbacks(this, this.keyDown);
            }

            abstract keyDown(event: KeyboardEvent);
        }
    }
}