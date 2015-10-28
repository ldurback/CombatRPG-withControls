namespace CombatRPG {
    export namespace States {
        export namespace Battles {
            export abstract class Battle extends Phaser.State {
                preload() {
                    this.game.state.add("GameOver", States.GameOverScreen);

                }
            }
        }
    }
}