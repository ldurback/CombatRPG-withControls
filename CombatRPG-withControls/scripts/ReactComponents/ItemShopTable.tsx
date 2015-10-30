namespace CombatRPG {
    export namespace ReactComponents {
        export interface ItemShopTableProps extends React.Props<any> {
            availableItems: string[];
            game: Phaser.Game;
            shop: States.Shops.Shop;

            itemClassName?: string;
        }

        export enum ItemShopDealType {
            Buy,
            Sell
        }

        interface ItemShopTableState {
            deal: ItemShopDealType;
            itemName: string;
            itemDescription: string;
            confirm: boolean;
        }

        export class ItemShopTable extends React.Component<ItemShopTableProps, ItemShopTableState> {
            constructor(props: ItemShopTableProps) {
                super(props);

                this.state = {
                    deal: ItemShopDealType.Buy,
                    itemName: "",
                    itemDescription: "",

                    confirm: false
                };
            }

            render() {
                var items: any;

                if (this.state.deal == ItemShopDealType.Buy) { // if we're buying, get the shop inventory's prices
                    items = this.props.availableItems.map((itemName: string, index: number, array: string[]) => {
                        var itemType: any = Items.itemDictionary[itemName];
                        var price: number = itemType.buyingPrice;

                        return <tr key={index}
                            className={(price <= this.props.game.player.gold ? "link" : "unavailableToBuy") + " " + (this.props.itemClassName ? this.props.itemClassName : "")}
                            onClick={price <= this.props.game.player.gold ? e => {
                                this.setState({
                                    deal: ItemShopDealType.Buy,
                                    itemName: itemName,
                                    itemDescription: itemType.description,
                                    confirm: true
                                })
                            } : e => { } }>
                            <td>{itemName}</td>
                            <td>{price} Gold</td>
                        </tr>
                    });
                }
                else if (this.state.deal == ItemShopDealType.Sell) { // if we're selling, get the player's inventory's prices
                    var playerInventory = Utils.mapToArray(this.props.game.player.items);
                    items = playerInventory.map((itemNameAndAmount: [string, number], index: number, array: [string, number][]) => {
                        var itemName = itemNameAndAmount[0];
                        var itemAmount = itemNameAndAmount[1];

                        if (itemAmount <= 0)
                            return <tr key={index}></tr>;

                        var itemType: any = Items.itemDictionary[itemName];
                        var price: number = itemType.sellingPrice;

                        return <tr key={index}
                            className={"link" + " " + (this.props.itemClassName ? this.props.itemClassName : "")}
                            onClick={e => {
                                this.setState({
                                    deal: ItemShopDealType.Sell,
                                    itemName: itemName,
                                    itemDescription: itemType.description,
                                    confirm: true
                                })
                            } }>
                            <td>{itemName} ({itemAmount})</td>
                            <td>{price} Gold Each</td>
                        </tr>
                    });
                }

                return <div>
                    <div>{this.props.game.player.gold} Gold</div>
                    <span className={(this.state.deal != ItemShopDealType.Buy ? "unselectedOption" : "") + " link selectable"}
                        onClick={ e => {
                            this.setState({
                                deal: ItemShopDealType.Buy,
                                itemName: "",
                                itemDescription: "",
                                confirm: false
                            })
                        } }>Buy</span>
                    {" "}
                    <span
                        className={(this.state.deal != ItemShopDealType.Sell ? "unselectedOption" : "") + " link selectable"}
                        onClick={ e => {
                            this.setState({
                                deal: ItemShopDealType.Sell,
                                itemName: "",
                                itemDescription: "",
                                confirm: false
                            });
                        } }>Sell</span>
                    <hr />
                    <table><tbody>{items}</tbody></table>
                    {this.state.itemName != "" ? <hr /> : ""}
                    <div>{(this.state.itemName ? (this.state.deal == ItemShopDealType.Buy ? "Buy " : "") +
                        (this.state.deal == ItemShopDealType.Sell ? "Sell " : "") +
                        this.state.itemName + "?: " : "") + this.state.itemDescription}</div>
                    <div onClick={ e => {
                        if (this.state.deal == ItemShopDealType.Buy)
                            this.props.shop.buy(this.state.itemName);
                        else if (this.state.deal == ItemShopDealType.Sell)
                            this.props.shop.sell(this.state.itemName);

                        this.setState({
                            deal: this.state.deal,
                            itemName: "",
                            itemDescription: "",
                            confirm: false
                        });
                    } }>{(this.state.itemName ? "Yes" : "")}</div>
                </div>
            }
        }
    }
}