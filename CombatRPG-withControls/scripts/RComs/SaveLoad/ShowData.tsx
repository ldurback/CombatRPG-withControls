namespace CombatRPG {
    export namespace RComs {
        export namespace SaveLoad {
            export interface ShowDataProps extends React.Props<any> {
                saveData: Utils.SaveData;
                saveKey: string;
                onClick?: React.MouseEventHandler;
                className?: string;
            }

            export class ShowData extends React.Component<ShowDataProps, {}> {
                render() {
                    var onClickEvent: React.MouseEventHandler;
                    if (this.props.onClick) {
                        onClickEvent = this.props.onClick;
                    }
                    else {
                        onClickEvent = (e: React.MouseEvent) => {}
                    }

                    return <div className={this.props.className} onClick={onClickEvent}>
                        <div>{this.props.saveKey}</div>
                        <div>{this.props.saveData.return.state}</div>
                        <div>HP: {this.props.saveData.player.status.currentHP}/{this.props.saveData.player.status.maxHP}</div>
                        <div>Strength: {this.props.saveData.player.status.strength}</div>
                        <div>Defense: {this.props.saveData.player.status.defense}</div>
                        </div>;
                }
            }
        }
    }
}