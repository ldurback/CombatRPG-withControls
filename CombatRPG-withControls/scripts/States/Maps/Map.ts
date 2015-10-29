///<reference path="../../lib/phaser.d.ts" />
///<reference path="../../Game.ts" />

namespace CombatRPG {
    export namespace States {
        export namespace Maps {
            export abstract class Map extends BaseState {
                preloadBar: Phaser.Sprite;

                player: Entities.Map.Player;
                playerInput: Input.Map;

                loadAssets() {
                    this.load.spritesheet("character", "/assets/images/character.png", 64, 64);

                    this.mapSpecificLoadAssets();
                }

                abstract mapSpecificLoadAssets();

                initialize() {
                    this.game.inBattle = false;
                    this.game.return.state = this.name();
                    this.game.physics.arcade.gravity.y = 0;

                    if (this.game.showVirtualGamepad)
                        this.createVirtualGamepad();

                    this.player = new Entities.Map.Player(this.game, this.game.return.position.x, this.game.return.position.y);
                    this.playerInput = new Input.Map(this.game, this.player, this.virtualGamepad);

                    this.createScene();
                }

                abstract createScene();

                update() {
                    // send to status screen on pressing escape
                    if (this.game.input.keyboard.isDown(Phaser.Keyboard.ESC)) {
                        this.game.statusMenu.showMenu();
                    }

                    this.mapSpecificUpdate();
                }

                abstract mapSpecificUpdate();

                name(): string {
                    var funcNameRegex = /function (.{1,})\(/;
                    var results = (funcNameRegex).exec((this).constructor.toString());
                    return (results && results.length > 1) ? results[1] : "";
                }

                addGamepadButtonsStateSpecific(gamepad: Phaser.SinglePad) {
                    this.playerInput.addGamepadButtons(gamepad);
                }

                removeGamepadButtonsStateSpecific(gamepad: Phaser.SinglePad) {
                    this.playerInput.removeGamepadButtons(gamepad);
                }

                destroy() {
                    this.playerInput.destroy();
                }
            }
        }
    }
}