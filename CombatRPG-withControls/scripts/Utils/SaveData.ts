namespace CombatRPG {
    export namespace Utils {
        export interface SaveData {
            player: {
                status: CombatRPG.Entities.Battle.Status;
                gold: number;
                items: Array<[string, number]>;
            }

            return: {
                state: string;
                position: {
                    x: number;
                    y: number;
                };
            }
        }
    }
}