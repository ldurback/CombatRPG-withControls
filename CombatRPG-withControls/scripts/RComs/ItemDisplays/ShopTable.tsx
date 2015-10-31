namespace CombatRPG {
    export namespace RComs {
        export namespace ItemDisplays {
            export interface ShopTableProps extends React.Props<any> {
                availableItems: string[];
                game: Phaser.Game;
                shop: States.Shops.Shop;

                itemClassName?: string;
            }

            export enum ShopDealType {
                Buy,
                Sell
            }

            interface ShopTableState {
                deal: ShopDealType;
                itemName: string;
                itemDescription: string;
                confirm: boolean;
            }

            export class ShopTable extends React.Component<ShopTableProps, ShopTableState> {
                constructor(props: ShopTableProps) {
                    super(props);

                    this.state = {
                        deal: ShopDealType.Buy,
                        itemName: "",
                        itemDescription: "",

                        confirm: false
                    };
                }

                render() {
                    var items: any;

                    if (this.state.deal == ShopDealType.Buy) { // if we're buying, get the shop inventory's prices
                        items = this.props.availableItems.map((itemName: string, index: number, array: string[]) => {
                            var itemType: any = Items.itemDictionary[itemName];
                            var price: number = itemType.buyingPrice;

                            return <tr key={index}
                                className={(price <= this.props.game.data.player.gold ? "link" : "unavailableToBuy") + " " + (this.props.itemClassName ? this.props.itemClassName : "") }
                                onClick={price <= this.props.game.data.player.gold ? e => {
                                    this.setState({
                                        deal: ShopDealType.Buy,
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
                    else if (this.state.deal == ShopDealType.Sell) { // if we're selling, get the player's inventory's prices
                        var playerInventory = Utils.mapToArray(this.props.game.data.player.items);
                        items = playerInventory.map((itemNameAndAmount: [string, number], index: number, array: [string, number][]) => {
                            var itemName = itemNameAndAmount[0];
                            var itemAmount = itemNameAndAmount[1];

                            if (itemAmount <= 0)
                                return <tr key={index}></tr>;

                            var itemType: any = Items.itemDictionary[itemName];
                            var price: number = itemType.sellingPrice;

                            return <tr key={index}
                                className={"link" + " " + (this.props.itemClassName ? this.props.itemClassName : "") }
                                onClick={e => {
                                    this.setState({
                                        deal: ShopDealType.Sell,
                                        itemName: itemName,
                                        itemDescription: itemType.description,
                                        confirm: true
                                    })
                                } }>
                                <td>{itemName} ({itemAmount}) </td>
                                <td>{price} Gold Each</td>
                                </tr>
                        });
                    }

                    var confirmDiv = <div className="selectable link"
                        onClick={ e => {
                            if (this.state.deal == ShopDealType.Buy)
                                this.props.shop.buy(this.state.itemName);
                            else if (this.state.deal == ShopDealType.Sell)
                                this.props.shop.sell(this.state.itemName);

                            this.setState({
                                deal: this.state.deal,
                                itemName: "",
                                itemDescription: "",
                                confirm: false
                            });
                        } }>{(this.state.itemName ? "Yes" : "") }</div>;

                    return <div>
                        <div>{this.props.game.data.player.gold} Gold</div>
                        <span className={(this.state.deal != ShopDealType.Buy ? "unselectedOption" : "") + " link selectable"}
                            onClick={ e => {
                                this.setState({
                                    deal: ShopDealType.Buy,
                                    itemName: "",
                                    itemDescription: "",
                                    confirm: false
                                })
                            } }>Buy</span>
                        {" "}
                        <span
                            className={(this.state.deal != ShopDealType.Sell ? "unselectedOption" : "") + " link selectable"}
                            onClick={ e => {
                                this.setState({
                                    deal: ShopDealType.Sell,
                                    itemName: "",
                                    itemDescription: "",
                                    confirm: false
                                });
                            } }>Sell</span>
                        <hr />
                        <table><tbody>{items}</tbody></table>
                        {this.state.itemName != "" ? <hr /> : ""}
                        <div>{(this.state.itemName ? (this.state.deal == ShopDealType.Buy ? "Buy " : "") +
                            (this.state.deal == ShopDealType.Sell ? "Sell " : "") +
                            this.state.itemName + "?: " : "") + this.state.itemDescription}</div>
                        {this.state.confirm ? confirmDiv : ""}
                        </div>;
                }
            }
        }
    }
}