﻿namespace CombatRPG {
    export namespace States {
        export class SplashScreen extends Phaser.State {
            preload() {
                this.game.state.add("MainMenu", States.MainMenu);
            }

            create() {
                var splashScreenText = <div onClick={ e => alert("AHHHHHHHHH!") }><h1>Combat RPG</h1></div>;

                var target = document.getElementById("splash-screen");

                React.render(splashScreenText, target);

                $("#splash-screen").show();

                $("#splash-screen").on("click", () => {
                    $("#splash-screen").hide();

                    this.game.state.start("MainMenu", true, false);
                });
            }
        }
    }
}