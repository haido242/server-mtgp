const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    point: {
        type: Number,
        required: true
    },
    leader: {
        type: Number,
    },
    previous: {
        type: Number,
    },
    qat: {
        type: Number,
    },
    ina: {
        type: Number,
    },
    arg: {
        type: Number,
    },
    ame: {
        type: Number,
    },
    por: {
        type: Number,
    },
    spa: {
        type: Number,
    },
    fra: {
        type: Number,
    },
    ita: {
        type: Number,
    },
    cat: {
        type: Number,
    },
    ger: {
        type: Number,
    },
    ned: {
        type: Number,
    },
    gbr: {
        type: Number,
    },
    aut: {
        type: Number,
    },
    rsm: {
        type: Number,
    },
    ara: {
        type: Number,
    },
    jpn: {
        type: Number,
    },
    tha: {
        type: Number,
    },
    aus: {
        type: Number,
    },
    mal: {
        type: Number,
    },
    val: {
        type: Number,
    }
});

module.exports = mongoose.model('Data', dataSchema);