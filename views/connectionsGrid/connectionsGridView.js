import { ConnectionsGrid } from "./js/connectionsGrid.js";

window.connectionsGridView = class ConnectionsGridView extends View {
    constructor() {
        super();
        this.overflow = undefined;
    }

    meta() {
        return {
            title: "Connections Grid",
            description: ConnectionsGrid.LONG_LOAD_WARNING,
            docs: "",
        };
    }

    init(container_selector, person_id) {
        // Our view fiddles with the overflow style value of view-container, so we want to reset it to its original
        // value once the user is done with our view.
        // However, init() can be called multiple times while the view is active (i.e. everytime the GO button is clicked)
        // so we save the overflow value only if close() had been called since we last saved it
        if (!this.overflow) {
            this.overflow = $("#view-container").css("overflow");
        }
        const connectionsGrid = new ConnectionsGrid(container_selector, person_id);
    }

    close() {
        // Another view is about to be activated, retore the original overflow value of view-container
        $("#view-container").css({
            overflow: this.overflow,
        });
        this.overflow = undefined;
    }
};

connectionsGridView.cancelSettings = function () {
    let theDIV = document.getElementById("settingsDIV");
    theDIV.style.display = "none";
};
