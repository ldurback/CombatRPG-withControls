///<reference path="../../ReactComponents/ItemShopTable.tsx" />

namespace CombatRPG {
    export namespace States {
        export namespace Shops {
            export abstract class Shop extends BaseState {
                protected inventory: string[];
                protected title: string;

                protected abstract setTitleAndInventory();

                initialize() {
                    this.setTitleAndInventory();

                    var shopText = <div><b>{this.title}</b>
                        <br />
                        <ReactComponents.ItemShopTable availableItems={this.inventory}
                            game={this.game} shop={this}
                            itemClassName="selectable" />
                        <hr />
                        <div className="link selectable" onClick={e => this.exitStore() }>Exit</div>
                    </div>

                    var target = document.getElementById("shop-menu-screen");

                    React.render(shopText, target);

                    $("#shop-menu-screen").show();
                }

                private exitStore() {
                    $("#shop-menu-screen").hide();

                    this.game.state.start(this.game.data.return.state);
                }

                buy(itemName: string) {
                    if (this.inventory.indexOf(itemName) < 0)
                        throw "Error: Shop tried to let a player buy an item it doesn't have";

                    var itemType: any = Items.itemDictionary[itemName];

                    if (this.game.data.player.gold < itemType.buyingPrice)
                        throw "Error: Shop tried to let a player buy an item too expensive for him";

                    this.game.data.player.gold -= itemType.buyingPrice;

                    if (!this.game.data.player.items.has(itemName))
                        this.game.data.player.items.set(itemName, 0);

                    this.game.data.player.items.set(itemName,
                        this.game.data.player.items.get(itemName) + 1);
                }

                sell(itemName: string) {
                    var itemType: any = Items.itemDictionary[itemName];

                    if (this.game.data.player.items.get(itemName) < 1)
                        throw "Error: Shop tried to let a player sell an item he didn't have";

                    this.game.data.player.gold += itemType.sellingPrice;
                    this.game.data.player.items.set(itemName,
                        this.game.data.player.items.get(itemName) - 1);
                }
            }
        }
    }
}