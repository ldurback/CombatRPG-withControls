namespace CombatRPG {
    export namespace States {
        export class SplashScreen extends Phaser.State {
            preload() {
            }

            create() {
                var splashScreenText = <div><h1>Combat RPG</h1></div>;

                var target = document.getElementById("splash-screen");

                React.render(splashScreenText, target);

                $("#splash-screen").show();
            }
        }
    }
}