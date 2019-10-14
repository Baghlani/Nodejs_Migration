const Column = require("./Column");

class Blueprint {
    constructor() {
        this.blueprint = {
            name: "",
            structure: {
                columns: {},
                options: {}
            },
            options: ""
        };
    }

    column(name) {
        let column = new Column(name);
        this.blueprint.structure.columns[name] = column;
        return column;
    }
}

module.exports = Blueprint;
