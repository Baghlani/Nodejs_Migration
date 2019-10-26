class Column {
    /**
     *Creates an instance of Column.
     * @param {*} name
     * @memberof Column
     */
    constructor(name) {
        this.name = name;
    }

    /**
     *
     *
     * @static
     * @returns
     * @memberof Column
     */
    static unsignedAllowed() {
        return ["TINYINT", "SMALLINT", "MEDIUMINT", "INT", "BIGINT"];
    }

    /**
     *
     *
     * @returns
     * @memberof Column
     */
    autoIncrement() {
        this.autoIncrement = "AUTO_INCREMENT";
        return this;
    }

    /**
     *
     *
     * @returns
     * @memberof Column
     */
    unsigned() {
        if (!Column.unsignedAllowed().includes(this.type)) {
            throw "this column can't be unsigned";
        }

        this.unsigned = true;
        return this;
    }

    /**
     *
     *
     * @returns
     * @memberof Column
     */
    nullable() {
        this.nullable = true;
        return this;
    }

    default(value) {
        this.default = value;
        return this;
    }
    /**
     *
     *
     * @param {*} type
     * @returns
     * @memberof Column
     */
    assignType(type) {
        this.type = type;
        return this;
    }

    /**
     *
     *
     * @param {*} args
     * @returns
     * @memberof Column
     */
    assignArguments(args) {
        this.arguments = args;
        return this;
    }

    /**
     *
     *
     * @param {*} comment
     * @memberof Column
     */
    comment(comment) {
        this.comment = comment;
    }

    // ** getters **

    get getNullable() {
        if (!this.hasOwnProperty("nullable") || !this.nullable) {
            return "NOT NULL";
        }
        return "NULL";
    }

    //FIXME: Can 4 functions bellow be integrated into one function?
    get getDefault() {
        if (!this.hasOwnProperty("default") || !this.default) {
            return "";
        }
        return `DEFAULT '${this.default}'`;
    }

    get getUnsigned() {
        if (!this.hasOwnProperty("unsigned") || !this.unsigned) {
            return "";
        }
        return "UNSIGNED";
    }

    get getComment() {
        if (!this.hasOwnProperty("comment") || !this.comment) {
            return "";
        }
        return `COMMENT '${this.comment}'`;
    }

    get getIncrement() {
        if (!this.hasOwnProperty("autoIncrement") || !this.autoIncrement) {
            return "";
        }
        return "AUTO_INCREMENT";
    }
    // End of FIXME

    get getArgs() {
        if (!this.arguments.length) {
            return "";
        }
        return `(${this.arguments.join(",")})`;
    }

    // STRING DATA TYPES:

    /**
     *
     *
     * @param {*} args
     * @returns
     * @memberof Column
     */
    char(...args) {
        //TODO: add a default length
        return this.assignType("CHAR").assignArguments(args);
    }

    /**
     *
     *
     * @param {*} args
     * @returns
     * @memberof Column
     */
    varchar(...args) {
        //TODO: add a default length
        return this.assignType("VARCHAR").assignArguments(args);
    }

    /**
     *
     *
     * @param {*} args
     * @returns
     * @memberof Column
     */
    text(...args) {
        return this.assignType("TEXT").assignArguments(args);
    }

    /**
     *
     *
     * @returns
     * @memberof Column
     */
    longText() {
        return this.assignType("LONGTEXT");
    }

    // NUMERIC DATA TYPES:

    /**
     *
     *
     * @param {*} args
     * @returns
     * @memberof Column
     */
    integer(...args) {
        return this.assignType("INT").assignArguments(args);
    }

    /**
     *
     *
     * @param {*} args
     * @returns
     * @memberof Column
     */
    tinyInteger(...args) {
        return this.assignType("TINYINT").assignArguments(args);
    }

    /**
     *
     *
     * @param {*} args
     * @returns
     * @memberof Column
     */
    smallInteger(...args) {
        return this.assignType("SMALLINT").assignArguments(args);
    }

    /**
     *
     *
     * @param {*} args
     * @returns
     * @memberof Column
     */
    mediumInteger(...args) {
        return this.assignType("MEDIUMINT").assignArguments(args);
    }

    /**
     *
     *
     * @param {*} args
     * @returns
     * @memberof Column
     */
    bigInteger(...args) {
        return this.assignType("BIGINT").assignArguments(args);
    }

    /**
     *
     *
     * @param {*} args
     * @param {*} decimalarguments
     * @returns
     * @memberof Column
     */
    double(...args) {
        return this.assignType("DOUBLE").assignArguments(args);
    }

    // DATE AND TIME DATA TYPES:

    /**
     *
     *
     * @param {*} args
     * @returns
     * @memberof Column
     */
    date(...args) {
        return this.assignType("DATE").assignArguments(args);
    }

    /**
     *
     *
     * @param {*} args
     * @returns
     * @memberof Column
     */
    dateTime(...args) {
        return this.assignType("DATETIME").assignArguments(args);
    }

    /**
     *
     *
     * @param {*} args
     * @returns
     * @memberof Column
     */
    timestamp(...args) {
        return this.assignType("TIMESTAMP").assignArguments(args);
    }

    /**
     *
     *
     * @param {*} charset
     * @returns
     * @memberof Column
     */
    charset(charset) {
        this.charset = charset;
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
        this.collation = collation;
        return this;
    }
}

module.exports = Column;
