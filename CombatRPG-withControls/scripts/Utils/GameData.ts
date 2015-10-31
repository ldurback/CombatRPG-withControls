namespace CombatRPG {
    export namespace Utils {
        export interface GameData {
            player: {
                status: CombatRPG.Entities.Battle.Status;
                gold: number;
                items: Map<string, number>;

                battleEntity: CombatRPG.Entities.Battle.Entity;
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