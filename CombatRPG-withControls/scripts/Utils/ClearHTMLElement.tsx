namespace CombatRPG {
    export namespace Utils {
        export var clearHTMLElement = (target: HTMLElement) => {
            var clearText = <div></div>;

            React.render(clearText, target);
        }
    }
}