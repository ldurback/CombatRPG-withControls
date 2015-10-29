///<reference path="../Entities/Map/Player.ts" />

namespace CombatRPG {
    export namespace Input {
        export class Battle {
            player: Entities.Battle.Player;
            game: Phaser.Game;
            cursors: Phaser.CursorKeys;
            virtualGamepad: VirtualGamepad;
            spacebar: Phaser.Key;

            constructor(game: Phaser.Game, player: Entities.Battle.Player, virtualGamepad?: VirtualGamepad) {
                this.player = player;
                this.game = game;
                this.virtualGamepad = virtualGamepad;

                this.cursors = this.game.input.keyboard.createCursorKeys();

                this.spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

                this.cursors.left.onDown.add(() => this.player.setToMoveLeft());
                this.cursors.left.onUp.add(() => this.player.stopMovingLeft());

                this.cursors.up.onDown.add(() => this.player.setToJump());
                this.cursors.up.onUp.add(() => this.player.stopJumping());

                this.cursors.right.onDown.add(() => this.player.setToMoveRight());
                this.cursors.right.onUp.add(() => this.player.stopMovingRight());

                this.spacebar.onDown.add(() => this.player.setToAttack());
                this.spacebar.onUp.add(() => this.player.stopAttacking());


                if (this.virtualGamepad) {
                    virtualGamepad.left.onInputDown.add(() => this.player.setToMoveLeft());
                    virtualGamepad.left.onInputUp.add(() => this.player.stopMovingLeft());

                    virtualGamepad.up.onInputDown.add(() => this.player.setToJump());
                    virtualGamepad.up.onInputUp.add(() => this.player.stopJumping());

                    virtualGamepad.right.onInputDown.add(() => this.player.setToMoveRight());
                    virtualGamepad.right.onInputUp.add(() => this.player.stopMovingRight());

                    virtualGamepad.action.onInputDown.add(() => this.player.setToAttack());
                    virtualGamepad.action.onInputUp.add(() => this.player.stopAttacking());
                }
            }

            addGamepadButtons(gamepad: Phaser.SinglePad) {
                gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_LEFT).onDown.add(() => this.player.setToMoveLeft());
                gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_LEFT).onUp.add(() => this.player.stopMovingLeft());

                gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_UP).onDown.add(() => this.player.setToJump());
                gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_UP).onUp.add(() => this.player.stopJumping());

                gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_RIGHT).onDown.add(() => this.player.setToMoveRight());
                gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_RIGHT).onUp.add(() => this.player.stopMovingRight());

                gamepad.getButton(Phaser.Gamepad.XBOX360_A).onDown.add(() => this.player.setToAttack());
                gamepad.getButton(Phaser.Gamepad.XBOX360_A).onUp.add(() => this.player.stopAttacking());
            }

            removeGamepadButtons(gamepad: Phaser.SinglePad) {
                gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_LEFT).onDown.removeAll();
                gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_LEFT).onUp.removeAll();
                gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_UP).onDown.removeAll();
                gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_UP).onUp.removeAll();
                gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_RIGHT).onDown.removeAll();
                gamepad.getButton(Phaser.Gamepad.XBOX360_DPAD_RIGHT).onUp.removeAll();
                gamepad.getButton(Phaser.Gamepad.XBOX360_A).onDown.removeAll();
                gamepad.getButton(Phaser.Gamepad.XBOX360_A).onUp.removeAll();
            }

            destroy() {
                this.cursors.up.onDown.removeAll(this);
                this.cursors.up.onUp.removeAll(this);

                this.cursors.left.onDown.removeAll(this);
                this.cursors.left.onUp.removeAll(this);

                this.cursors.right.onDown.removeAll(this);
                this.cursors.right.onUp.removeAll(this);

                this.spacebar.onDown.removeAll(this);
                this.spacebar.onUp.removeAll(this);

                if (this.virtualGamepad) {
                    this.virtualGamepad.up.onInputDown.removeAll();
                    this.virtualGamepad.up.onInputUp.removeAll();

                    this.virtualGamepad.left.onInputDown.removeAll();
                    this.virtualGamepad.left.onInputUp.removeAll();

                    this.virtualGamepad.right.onInputDown.removeAll();
                    this.virtualGamepad.right.onInputUp.removeAll();

                    this.virtualGamepad.action.onInputDown.removeAll();
                    this.virtualGamepad.action.onInputUp.removeAll();
                }
            }
        }
    }
}