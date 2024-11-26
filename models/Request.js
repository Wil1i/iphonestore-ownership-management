const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const Request = db.define("requests", {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },

    ownershipNumber : {
        type : DataTypes.TEXT
    },

    customerNumber : {
        type : DataTypes.TEXT
    },

    customerName : {
        type : DataTypes.TEXT
    },

    byUser : {
        type : DataTypes.INTEGER
    },

    IMEI1 : {
        type : DataTypes.TEXT
    },

    IMEI2 : {
        type : DataTypes.TEXT
    },

    phoneModel : {
        type : DataTypes.TEXT
    },

    transferType : {
        type : DataTypes.TEXT
    },

    status : {
        type : DataTypes.TEXT
    },

    code : {
        type : DataTypes.TEXT
    },

    aghsat : {
        type : DataTypes.TEXT
    }
})

Request.sync()

module.exports = Request