const Column = require("./Column");

class Blueprint {
    /**
     * Creates an instance of Blueprint.
     *
     * @memberof Blueprint
     */
    constructor() {
        this.blueprint = {
            name: "",
            structure: {
                columns: {},
                modifiers: {
                    unique: []
                }
            },
            options: {}
        };
    }

    /**
     * create a new Column instance and
     * add it to this Blueprint instance
     *
     * @param {*} name
     * @returns
     * @memberof Blueprint
     */
    column(name) {
        let column = new Column(name);
        this.blueprint.structure.columns[name] = column;
        return column;
    }

    /**
     * Specify table PrimaryKey
     *
     * @param {*} columnName
     * @returns
     * @memberof Blueprint
     */
    primary(columnName) {
        this.blueprint.structure.modifiers.primary = columnName;
        return this;
    }

    /**
     * create an array from unique columns
     *
     * @param {*} columnName
     * @returns
     * @memberof Blueprint
     */
    unique(columnName) {
        this.blueprint.structure.modifiers.unique.push(columnName);
        return this;
    }

    /**
     * Specify the index
     *
     * @param {*} columnName
     * @returns
     * @memberof Blueprint
     */
    index(columnName) {
        this.blueprint.structure.modifiers.index = columnName;
        return this;
    }
    /**
     * Specify the table character set
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
     * Specify the table collation
     *
     * @param {*} collation
     * @returns
     * @memberof Column
     */
    collation(collation) {
        this.blueprint.options.collation = collation;
        return this;
    }

    /**
     * write a comment for tablr
     *
     * @param {*} comment
     * @returns
     * @memberof Blueprint
     */
    comment(comment) {
        this.blueprint.options.comment = comment;
        return this;
    }

    /**
     * Specify the table Engine
     *
     * @param {*} engine
     * @returns
     * @memberof Blueprint
     */
    engine(engine) {
        this.blueprint.options.engine = engine;
        return this;
    }

    //getters
    get getPrimary() {
        if (!this.blueprint.structure.modifiers.primary) {
            return "";
        }
        return `PRIMARY KEY (\`${this.blueprint.structure.modifiers.primary}\`)`;
    }
}

module.exports = Blueprint;
