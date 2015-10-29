///<reference path="BaseState.ts" />
///<reference path="MainMenu.tsx" />

///<reference path="../ReactComponents/Menu.tsx" />
///<reference path="../ReactComponents/Dialog.tsx" />
///<reference path="../ReactComponents/Message.tsx" />

namespace CombatRPG {
    export namespace States {
        export class DevMenu extends BaseState {
            loadAssets() {
                this.game.state.add("MainMenu", States.MainMenu);
            }

            initialize() {
                this.renderScreen();
            }

            private renderScreen() {
                var menu = <div><b>Dev Menu</b>
                    <div className={this.game.highlightMenu ? "selectable selected link" : "selectable link"} onClick={e => { this.goToMainMenu() } }>Main Menu</div>
                    <ReactComponents.Menu titleClassName={this.game.highlightMenu ? "selectable selected link menu-link" : "selectable link menu-link"} title="Conversations">
                        <ul>
                            <li><div className={this.game.highlightMenu ? "selectable selected link menu-link" : "selectable link menu-link"} onClick={e => {
                                this.runDemoConversation();
                            } }>Demo Conversation</div></li>
                        </ul>
                    </ReactComponents.Menu>
                </div>;
                var target = document.getElementById("dev-menu-screen");

                React.render(menu, target);
                $("#dev-menu-screen").show();
            }

            private exitScreen() {
                var clear = <div></div>;
                var target = document.getElementById("dev-menu-screen");

                React.render(clear, target);
                $("#dev-menu-screen").hide();
            }

            runDemoConversation() {
                var demoConversation = (<ReactComponents.Dialog key="demoConvo" onClose={() => {
                    $("#dialogs").hide()
                } }>
                    <div>This demo has nothing in it yet except for some text.
                        Click on the conversation box to continue.</div>
                    <div>Click to close.</div>
                    </ReactComponents.Dialog>);

                var target = document.getElementById("dialogs");

                React.render(demoConversation, target);

                $("#dialogs").show();
            }

            private goToMainMenu() {
                this.game.state.start("MainMenu", true, false);
            }

            destroy() {
                this.exitScreen();
            }
        }
    }
}