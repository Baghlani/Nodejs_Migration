const Column = require("./Column");

class Blueprint {
    constructor() {
        this.blueprint = {
            name: "",
            structure: {
                columns: {},
                modifires: {
                    unique: []
                }
            },
            options: {}
        };
    }

    column(name) {
        let column = new Column(name);
        this.blueprint.structure.columns[name] = column;
        return column;
    }

    primary(columnName) {
        this.blueprint.structure.modifires.primary = columnName;
        return this;
    }

    unique(columnName) {
        this.blueprint.structure.modifires.unique.push(columnName);
        return this;
    }

    index(columnName) {
        this.blueprint.structure.modifires.index = columnName;
        return this;
    }
    /**
     *
     *
     * @param {*} charset
     * @returns
     * @memberof Column
     */
    charset(charset) {
        this.blueprint.options.charset = charset;
        return this;
    }

    /**
     *
     *
     * @param {*} collation
     * @returns
     * @memberof Column
     */
    collation(collation) {
        this.blueprint.options.collation = collation;
        return this;
    }

    comment(comment) {
        this.blueprint.options.comment = comment;
        return this;
    }

    engine(engine) {
        this.blueprint.options.engine = engine;
        return this;
    }
}

module.exports = Blueprint;
