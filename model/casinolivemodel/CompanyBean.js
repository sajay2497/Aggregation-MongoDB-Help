const mongoose = require('mongoose');

const CompanyBeanSchema = new mongoose.Schema({
    companyName: {
        type: String
    },
    companyCode: {
        type: String
    },
    imageUrl: {
        type: String
    },
    pageUrl: {
        type: String
    },
    isActive: {
        type: Boolean
    },
    clientId: {
        type: String
    }
});

module.exports = mongoose.model("companyBean", CompanyBeanSchema);