namespace CombatRPG {
    export namespace Utils {
        export class UINavigator {
            static moveSelectedElementUp() {
                var currentSelected = $(".selected");
                var allSelectable = $(".selectable");
                var prev: JQuery;
                if (currentSelected[0]) {
                    prev = allSelectable.eq(allSelectable.index(currentSelected) - 1);
                }
                else {
                    prev = allSelectable.last();
                }

                if (prev[0]) {
                    currentSelected.removeClass("selected");
                    prev.addClass("selected");
                    prev.mouseover();
                }
            }

            static moveSelectedElementDown() {
                var currentSelected = $(".selected");
                var allSelectable = $(".selectable");
                var next: JQuery;
                if (currentSelected[0]) {
                    next = allSelectable.eq(allSelectable.index(currentSelected) + 1);
                }
                else {
                    next = allSelectable.first();
                }

                if (!next[0])
                    next = allSelectable.first();

                if (next[0]) {
                    currentSelected.removeClass("selected");
                    next.addClass("selected");
                    next.mouseover();
                }
            }

            static clickSelectedOrMessage() {
                var message = $(".message");

                if (message[0])
                    message.click();
                else
                    $(".selected").click();
            }

            static removeSelected() {
                var currentSelected = $(".selected");
                currentSelected.removeClass("selected");
            }

            static selectFirstSelectable() {
                var selectable = $(".selectable");
                selectable.first().addClass("selected");

                selectable.first().mouseover();
            }
        }
    }
}