const mongoose = require('mongoose');
// require('mongoose-double')(mongoose);

// var SchemaTypes = mongoose.Schema.Types;
// require('@mongoosejs/double');
const GamesBeanSchema = new mongoose.Schema({
    gameName: {
        type: String,
    },
    gameCode: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    matchingUrl: {
        type: String,
    },
    company: {
        type: String,
    },
    isActive: {
        type: Boolean
    },
    minStake: {
        type: String
    },
    maxStake: {
        type: String
    },
    // maxProfitLoss: {
    //     type: mongoose.Schema.Types.Double
    // },
    pageUrl: {
        type: String
    },
    clientId: {
        type: String
    },
    islayAvailable: {
        type: Boolean
    }
});

module.exports = mongoose.model("gamesBean", GamesBeanSchema);