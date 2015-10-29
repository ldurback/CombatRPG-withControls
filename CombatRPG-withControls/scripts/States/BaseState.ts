///<reference path="../VirtualGamepad.ts" />

namespace CombatRPG {
    export namespace States {
        export abstract class BaseState extends Phaser.State {
            preloadBar: Phaser.Sprite;
            cursors: Phaser.CursorKeys;
            gamepad1: Phaser.SinglePad;

            virtualGamepad: VirtualGamepad;

            preload() {
                this.preloadBar = this.add.sprite(200, 250, 'preloadBar');

                this.load.setPreloadSprite(this.preloadBar);

                this.loadAssets();
            }

            create() {
                this.preloadBar.kill();

                this.initialize();

                this.setupUIInput();
            }

            shutdown() {
                this.tearDownUIInput();

                this.destroy();
            }

            loadAssets() { }
            initialize() { }
            destroy() { }

            createVirtualGamepad() {
                this.virtualGamepad = {
                    action: null,
                    up: null,
                    left: null,
                    right: null,
                    down: null
                };

                this.virtualGamepad.right = this.game.add.button(80, 600 - 48, 'arrow-right', null, this);
                this.virtualGamepad.right.anchor.set(0.5, 0.5);

                this.virtualGamepad.left = this.game.add.button(16, 600 - 48, 'arrow-right', null, this);
                this.virtualGamepad.left.anchor.set(0.5, 0.5);
                this.virtualGamepad.left.scale.x = -1;

                this.virtualGamepad.up = this.game.add.button(48, 600 - 80, 'arrow-up', null, this);
                this.virtualGamepad.up.anchor.set(0.5, 0.5);

                this.virtualGamepad.down = this.game.add.button(48, 600 - 16, 'arrow-up', null, this);
                this.virtualGamepad.down.anchor.set(0.5, 0.5);
                this.virtualGamepad.down.scale.y = -1;

                this.virtualGamepad.action = this.game.add.button(800 - 16, 600 - 16, 'square', null, this);
                this.virtualGamepad.action.anchor.set(0.5, 0.5);
            }

            private setupUIInput() {
                this.cursors = this.game.input.keyboard.createCursorKeys();
                this.game.input.gamepad.start();

                this.gamepad1 = this.game.input.gamepad.pad1;

                if (this.gamepad1.connected)
                    this.addGamepadButtons();

                this.gamepad1.addCallbacks(this, { onConnect: () => this.addGamepadButtons() });

                this.cursors.up.onDown.add(this.moveSelectedElementUp, this);
                this.cursors.down.onDown.add(this.moveSelectedElementDown, this);

                var spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
                var enter = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

                spacebar.onDown.add(this.clickSelectedOrMessage, this);
                enter.onDown.add(this.clickSelectedOrMessage, this);
            }

            private tearDownUIInput() {
                this.cursors.up.onDown.removeAll(this);
                this.cursors.down.onDown.removeAll(this);
                this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.removeAll(this);
                this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown.removeAll(this);

                if (this.gamepad1.connected)
                    this.removeGamepadButtons();

                this.gamepad1.onConnectCallback = null;
            }

            addGamepadButtons() {
                this.game.highlightMenu = true;

                this.gamepad1.getButton(Phaser.Gamepad.XBOX360_DPAD_UP).onDown.add(() => this.moveSelectedElementUp(), this);
                this.gamepad1.getButton(Phaser.Gamepad.XBOX360_DPAD_DOWN).onDown.add(() => this.moveSelectedElementDown(), this);
                this.gamepad1.getButton(Phaser.Gamepad.XBOX360_A).onDown.add(() => this.clickSelectedOrMessage(), this);

                this.addGamepadButtonsStateSpecific(this.gamepad1);
            }

            addGamepadButtonsStateSpecific(gamepad: Phaser.SinglePad) { }

            removeGamepadButtons() {
                this.gamepad1.getButton(Phaser.Gamepad.XBOX360_DPAD_UP).onDown.removeAll();
                this.gamepad1.getButton(Phaser.Gamepad.XBOX360_DPAD_DOWN).onDown.removeAll();
                this.gamepad1.getButton(Phaser.Gamepad.XBOX360_A).onDown.removeAll();

                this.removeGamepadButtonsStateSpecific(this.gamepad1);
            }

            removeGamepadButtonsStateSpecific(gamepad: Phaser.SinglePad) { }

            private moveSelectedElementUp() {
                var currentSelected = $(".selected");
                var allSelectable = $(".selectable");
                var prev: JQuery;
                if (currentSelected[0]) {
                    prev = allSelectable.eq(allSelectable.index(currentSelected) - 1);
                }
                else {
                    prev = allSelectable.last();
                }

                if (prev[0]) {
                    currentSelected.removeClass("selected");
                    prev.addClass("selected");
                }
            }

            private moveSelectedElementDown() {
                var currentSelected = $(".selected");
                var allSelectable = $(".selectable");
                var next: JQuery;
                if (currentSelected[0]) {
                    next = allSelectable.eq(allSelectable.index(currentSelected) + 1);
                }
                else {
                    next = allSelectable.first();
                }

                if (!next[0])
                    next = allSelectable.first();

                if (next[0]) {
                    currentSelected.removeClass("selected");
                    next.addClass("selected");
                }
            }

            public clickSelectedOrMessage() {
                var message = $(".message");

                if (message[0])
                    message.click();
                else
                    $(".selected").click();
            }

            public removeSelected() {
                var currentSelected = $(".selected");
                currentSelected.removeClass("selected");
            }
        }
    }
}