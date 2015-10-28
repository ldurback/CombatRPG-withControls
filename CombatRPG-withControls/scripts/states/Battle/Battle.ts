namespace CombatRPG {
    export namespace Battle {
        export abstract class Battle extends Phaser.State {
            preload() {
                this.game.state.add("GameOver", States.GameOverScreen);

            }
        }
    }
}