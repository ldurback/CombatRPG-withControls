namespace CombatRPG {
    export namespace Utils {
        export class DataManager {
            static formatToSaveData(): SaveData {
                return {
                    player: {
                        status: game.data.player.status,

                        gold: game.data.player.gold,
                        items: Utils.mapToArray(game.data.player.items)
                    },

                    return: game.data.return
                }
            }

            static formatToGameData(save: SaveData): GameData {
                return {
                    player: {
                        status: save.player.status,

                        gold: save.player.gold,
                        items: new Map<string, number>(save.player.items),

                        battleEntity: null
                    },

                    return: save.return
                }
            }

            static save(key: string) {
                localStorage.setItem(key, JSON.stringify(this.formatToSaveData()));
            }

            static load(key: string) {
                var save: SaveData = localStorage.getItem(key);
                game.data = this.formatToGameData(save);
            }

            static deleteSave(key: string) {
                localStorage.removeItem(key);
            }
        }
    }
}