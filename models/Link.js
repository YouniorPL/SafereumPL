const mongoose = require('mongoose');
const { Schema } = mongoose;
const LinkSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    walletAddress: {
        type: String,
        required: true
    },
    ref_bouns: {
        type: Number,
        default: 0
    },
    buy_bouns: {
        type: Number,
        default: 0
    }

}, { timestamps: true })

module.exports = mongoose.model('Link', LinkSchema);