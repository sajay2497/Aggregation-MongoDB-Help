const mongoose = require('mongoose');

const ClientProfileBeanSchema = new mongoose.Schema({
    clientid: {
        type: String,
        required: true,
    },
    clientSecretkey: {
        type: String,
        required: true
    },
    ipAddress: {
        type: String,
        required: true
    },
    websiteName: {
        type: String,
    },
    isactive: {
        type: Boolean
    },
    clientRequestAddress: {
        type: String
    },
    clientPublicKey: {
        type: String
    },
    ownPrivateKey: {
        type: String
    },
    ownPublicKey: {
        type: String
    },
    profitlossSummary: {
        type: String
    },
    userBalanceLimit: {
        type: String
    },
    minProfitLoss: {
        type: String
    },
    maxProfitLoss: {
        type: String
    },
    scheduledBlock: {
        type: Boolean,
        default: false
    }
}, { timestamps: { createdAt: 'created_at' } });


module.exports = mongoose.model("clientProfileBean", ClientProfileBeanSchema);