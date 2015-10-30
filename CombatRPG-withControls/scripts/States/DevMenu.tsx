///<reference path="BaseState.ts" />
///<reference path="MainMenu.tsx" />

///<reference path="../ReactComponents/Menu.tsx" />
///<reference path="../ReactComponents/Dialog.tsx" />
///<reference path="../ReactComponents/Message.tsx" />

namespace CombatRPG {
    export namespace States {
        export class DevMenu extends BaseState {
            rendered: boolean;

            loadAssets() {
                this.game.state.add("MainMenu", States.MainMenu);
                this.rendered = false;
            }

            initialize() {
                this.game.return.state = "DevMenu";
                this.game.inBattle = false;

                this.game.state.add("BasicMap", States.Maps.BasicMap);
                this.game.state.add("SlimeBattle", States.Battles.SlimeBattle);
                this.game.state.add("BowOrcBattle", States.Battles.BowOrcBattle);
                this.game.state.add("PotionShop", States.Shops.PotionShop);

                this.renderScreen();
            }

            update() {
                if (!this.game.statusMenu.inMenu && !this.rendered) {
                    this.renderScreen();
                }
            }

            private renderScreen() {
                var menu = <div><b>Dev Menu</b>
                    <div className={this.game.highlightMenu ? "selectable selected link menu-link" : "selectable link menu-link"} onClick={e => { this.goToMainMenu() } }>Main Menu</div>
                    <div className="selectable link menu-link" onClick={e => {
                        this.game.statusMenu.showMenu();
                        this.exitScreen();
                    } }>Status Menu</div>
                    <ReactComponents.Menu titleClassName="selectable link menu-link" title="Conversations">
                        <ul>
                            <li><div className="selectable link menu-link" onClick={e => {
                                this.runDemoConversation();
                            } }>Demo Conversation</div></li>
                            <li><div className="selectable link menu-link" onClick={e => {
                                this.runSlimeConversation();
                            } }>Slime Conversation</div></li>
                        </ul>
                    </ReactComponents.Menu>
                    <ReactComponents.Menu titleClassName="selectable link menu-link" title="Battles">
                        <ul><li><div className="selectable link menu-link" onClick={e => {
                            this.exitScreen();
                            this.game.state.start("SlimeBattle");
                        } }>Slime Battle</div></li>

                            <li><div className="selectable link menu-link" onClick={e => {
                                this.exitScreen();
                                this.game.state.start("BowOrcBattle");
                            } }>BowOrc Battle</div></li></ul>
                        </ReactComponents.Menu>
                    <ReactComponents.Menu titleClassName="selectable link menu-link" title="Maps">
                        <ul><li><div className="selectable link menu-link" onClick={e => {
                            this.exitScreen();

                            this.game.return.position = { x: 400, y: 400 };
                            this.game.state.start("BasicMap");
                        } }>Basic Map</div></li></ul>
                        </ReactComponents.Menu>
                    <ReactComponents.Menu titleClassName="selectable link menu-link" title="Shops">
                        <ul><li><div className="selectable link menu-link" onClick={e => {
                            this.exitScreen();
                            this.game.state.start("PotionShop");
                        } }>Potion Shop</div></li></ul>
                        </ReactComponents.Menu>
                </div>;
                var target = document.getElementById("dev-menu-screen");

                React.render(menu, target);
                $("#dev-menu-screen").show();

                this.rendered = true;
            }

            private exitScreen() {
                Utils.clearHTMLElement(document.getElementById("dev-menu-screen"));
                $("#dev-menu-screen").hide();

                this.rendered = false;
            }

            runDemoConversation() {
                var demoConversation = (<ReactComponents.Dialog key="demoConvo" onClose={() => {
                    this.clearDialogs();
                } }>
                    <div>This demo has nothing in it yet except for some text.
                        Click on the dialog box to continue.</div>
                    <div>Click to close.</div>
                    </ReactComponents.Dialog>);

                var target = document.getElementById("dialogs");

                React.render(demoConversation, target);

                $("#dialogs").show();
            }

            runSlimeConversation() {
                var slimeConversation = (<ReactComponents.Dialog key="slimeConvo" onClose={() => {
                    this.clearDialogs();
                } }>
                    <ReactComponents.Message imageURL="assets/images/slime.png" name="Slime">I'm a slime!</ReactComponents.Message>
                </ReactComponents.Dialog>);

                var target = document.getElementById("dialogs");

                React.render(slimeConversation, target);

                $("#dialogs").show();
            }

            clearDialogs() {
                $("#dialogs").hide();
                Utils.clearHTMLElement(document.getElementById("dialogs"));
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