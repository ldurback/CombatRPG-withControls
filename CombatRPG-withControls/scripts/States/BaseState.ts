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

                this.setupUIInput();

                this.initialize();
            }
            
            abstract initialize();

            setupUIInput() {
                var cursors = this.game.input.keyboard.createCursorKeys();

                cursors.up.onDown.add(this.moveSelectedElementUp, this);
                cursors.down.onDown.add(this.moveSelectedElementDown, this);

                var spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
                var enter = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

                spacebar.onDown.add(this.clickSelected, this);
                enter.onDown.add(this.clickSelected, this);
            }

            moveSelectedElementUp() {
                var currentSelected = $(".selected");
                var prev = $(".selected").prev(".selectable");

                if (prev[0]) {
                    currentSelected.removeClass("selected");
                    prev.addClass("selected");
                }
            }

            moveSelectedElementDown() {
                var currentSelected = $(".selected");
                var next = $(".selected").next(".selectable");

                if (next[0]) {
                    currentSelected.removeClass("selected");
                    next.addClass("selected");
                }
            }

            clickSelected() {
                $(".selected").click();
            }
        }
    }
}