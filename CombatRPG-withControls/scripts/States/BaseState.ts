namespace CombatRPG {
    export namespace States {
        export abstract class BaseState extends Phaser.State {
            preloadBar: Phaser.Sprite;

            preload() {
                this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
                this.load.setPreloadSprite(this.preloadBar);

                this.loadAssets();
            }

            abstract loadAssets();

            create() {
                this.preloadBar.kill();

                this.initialize();
            }
            
            abstract initialize();
        }
    }
}