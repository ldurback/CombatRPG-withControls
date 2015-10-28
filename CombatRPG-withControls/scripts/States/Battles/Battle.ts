namespace CombatRPG {
    export namespace States {
        export namespace Battles {
            export abstract class Battle extends BaseState {
                loadAssets() {
                    this.game.state.add("GameOver", States.GameOverScreen);

                }

                initialize() {
                }
            }
        }
    }
}