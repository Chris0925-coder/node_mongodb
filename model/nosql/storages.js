const mongoose = require("mongoose");

const StoragesScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("storages", StoragesScheme);