///<reference path="SplashScreen.tsx" />

namespace CombatRPG {
    export namespace States {
        export namespace Util {
            export class Boot extends Phaser.State {
                preload() {
                    this.load.image('preloadBar', 'assets/images/loader.png');
                    this.load.image('arrow-right', 'assets/images/arrow-right.png');
                    this.load.image('arrow-up', 'assets/images/arrow-up.png');
                    this.load.image('square', 'assets/images/square.png');

                    this.game.state.add('SplashScreen', SplashScreen);
                }

                create() {
 
                    //  Unless you specifically need to support multitouch I would recommend setting this to 1
                    this.input.maxPointers = 1;
 
                    //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
                    this.stage.disableVisibilityChange = true;

                    if (this.game.device.desktop) {
                        //  If you have any desktop specific settings, they can go in here
                    }
                    else {
                        this.game.showVirtualGamepad = true;
                        //  Same goes for mobile settings.
                    }

                    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                    this.scale.pageAlignHorizontally = true;
                    this.scale.pageAlignVertically = true;
                    this.scale.forceOrientation(true, true);
                    this.scale.refresh();

                    this.game.state.start('SplashScreen', true, false);
                }
            }
        }
    }
}