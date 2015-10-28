namespace CombatRPG {
    export namespace States {
        export abstract class BaseState extends Phaser.State {
            preloadBar: Phaser.Sprite;
            cursors: Phaser.CursorKeys;

            preload() {
                this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
                this.load.setPreloadSprite(this.preloadBar);

                this.setupUIInput();

                this.loadAssets();
            }

            create() {
                this.preloadBar.kill();

                this.initialize();
            }

            shutdown() {
                this.tearDownUIInput();

                this.destroy();
            }

            loadAssets() { }
            initialize() { }
            destroy() { }

            private setupUIInput() {
                this.cursors = this.game.input.keyboard.createCursorKeys();

                this.cursors.up.onDown.add(this.moveSelectedElementUp, this);
                $("#virtual-gamepad-up").on("click", this.moveSelectedElementUp);
                this.cursors.down.onDown.add(this.moveSelectedElementDown, this);
                $("#virtual-gamepad-down").on("click", this.moveSelectedElementDown);

                var spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
                var enter = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

                spacebar.onDown.add(this.clickSelected, this);
                enter.onDown.add(this.clickSelected, this);
                $("#virtual-gamepad-button-action").on("click", this.clickSelected);
            }

            private tearDownUIInput() {
                this.cursors.up.onDown.removeAll(this);
                this.cursors.down.onDown.removeAll(this);
                this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.removeAll(this);
                this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown.removeAll(this);

                $("#virtual-gamepad-up").off("click", this.moveSelectedElementUp);
                $("#virtual-gamepad-down").off("click", this.moveSelectedElementDown);
                $("#virtual-gamepad-button-action").off("click", this.clickSelected);
            }

            private moveSelectedElementUp() {
                var currentSelected = $(".selected");
                var prev = $(".selected").prev(".selectable");

                if (prev[0]) {
                    currentSelected.removeClass("selected");
                    prev.addClass("selected");
                }
            }

            private moveSelectedElementDown() {
                var currentSelected = $(".selected");
                var next = $(".selected").next(".selectable");

                if (next[0]) {
                    currentSelected.removeClass("selected");
                    next.addClass("selected");
                }
            }

            private clickSelected() {
                $(".selected").click();
            }
        }
    }
}