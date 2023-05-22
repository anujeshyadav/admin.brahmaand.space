const { mongodb } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const thisSchema = new Schema(
    {

        comets_count: {
            type: Number,
        },
        avrage_rating: {
            type: Number,
        },
        views: {
            type: Number,
        },
        sub_scriber: {
            type: Number,
        },
        Likes: {
            type: Number,
        },
        Dislikes: {
            type: Number,
        },
        BS_rating: {
            type: Number,
        }

    },

    { timestamps: true }
);


module.exports = mongoose.model("war", thisSchema);
