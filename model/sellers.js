let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let sellerSchema = new Schema({
    name: { type: String, lowercase: true },
    shopName: { type: String, lowercase: true },
    email: { type: String, lowercase: true },
    password: String,
    otp: Number,
    isOtpValid: { type: Boolean, default: false },
    balance: { type: Number, default: 0 },
    transaction: [],
    created: { type: Number, index: -1 },
    updated: { type: Number },
    phoneNo: Number,
    isPhoneVerify: { type: Boolean, default: "false" },
    isAddressVerify: { type: Boolean, default: "false" },
    isAreaVerify: { type: Boolean, default: "false" },
    isProfileVerify: { type: Boolean, default: "false" },
    categoryIds: [],
    shopAddress: {
        //isAddressVerify: { type: Boolean, default: "false" },
        name: { type: Schema.Types.ObjectId, ref: 'user' },
        //name: { type: String, lowercase: true },
        phoneNo: String,
        pincode: Number,
        businessName: String,
        area: { type: String, lowercase: true },
        landmark: { type: String, lowercase: true },
        city: { type: String, lowercase: true },
        state: { type: String, lowercase: true },
        location: {},
        email: { type: String, lowercase: true },
        // radiusArea: { type: Number, default: 0 },
    },
    editShopAddress: {
        isAddressVerify: { type: Boolean, },
        name: { type: String, lowercase: true },
        mobileNo: Number,
        pincode: Number,
        shopNo: Number,
        area: { type: String, lowercase: true },
        landmark: { type: String, lowercase: true },
        city: { type: String, lowercase: true },
        state: { type: String, lowercase: true },
        location: {},

    },
    area: {
        type: { type: String, default: "MultiPolygon" },
        coordinates: []
    },
    product: [{
        productId: { type: Schema.Types.ObjectId, ref: 'product' },
        isVerified: Boolean,
        newPrice: Number,
        //quantity: Number,
        isDeleted: { type: Boolean, default: "false" },
        //otherValue:{type:String}
        created: { type: Number },
        updated: { type: Number }
    },],
    isEmailVerify: { type: Boolean, default: false },
    verifyToken: String,
    forgotVerifyToken: String,
    isForgotVerifyTokenValid: { type: Boolean, default: false },
    isVerify: { type: Boolean, default: false },
    isActivate: { type: Boolean, default: false },
    bank: {
        bankName: { type: String },
        accountNumber: { type: Number },
        ifsc: { type: String },
        accountHolderName: { type: String },
        isVerified: { type: Boolean, },
        created: { type: Number },
        updated: { type: Number }
    },

    gst: { type: String, lowercase: true },
    pan: { type: String, lowercase: true },
    isDeleted: { type: Boolean, default: "false" },
    contactUs: [{
        email: { type: String },
        phoneNo: { type: Number },
        name: { type: String },
        subject: { type: String },
        message: { type: String },
        created: Number,
        updated: Number,
    }],
    deviceId: [],
    cities: [],
    serveAreas: [],
    societies: [],
    draftProduct: [{
        name: { type: String, lowercase: true },
        price: { type: Number },
        quantity: { type: Number },
        image: [],
        isDeleted: { type: Boolean, default: "false" },
        created: { type: Number },
        updated: { type: Number }

    }
    ],
    businessAddress: {
        businessEntityName: { type: String, lowercase: true },
        fullAddress: { type: String, lowercase: true },
        pincode: Number,
        landmark: { type: String, lowercase: true },
        city: { type: String, lowercase: true },
        state: { type: String, lowercase: true },
        isVerified: { type: Boolean }
    },
    invoiceAddress: {
        businessEntityName: { type: String, lowercase: true },
        fullAddress: { type: String, lowercase: true },
        pincode: Number,
        landmark: { type: String, lowercase: true },
        city: { type: String, lowercase: true },
        state: { type: String, lowercase: true },
        isVerified: { type: Boolean }
    },
    shippingAddress: {
        businessEntityName: { type: String, lowercase: true },
        fullAddress: { type: String, lowercase: true },
        pincode: Number,
        landmark: { type: String, lowercase: true },
        city: { type: String, lowercase: true },
        state: { type: String, lowercase: true },
        isVerified: { type: Boolean }
    },
    returnAddress: {
        businessEntityName: { type: String, lowercase: true },
        fullAddress: { type: String, lowercase: true },
        pincode: Number,
        landmark: { type: String, lowercase: true },
        city: { type: String, lowercase: true },
        state: { type: String, lowercase: true },
        isVerified: { type: Boolean }
    },
    taxInformation: {
        gst: { type: String, lowercase: true },
        pan: { type: String, lowercase: true },
        digitalSignature: String,
        isVerified: { type: Boolean }
    },
    sellerInformation: {
        name: { type: String, lowercase: true },
        fullAddress: { type: String, lowercase: true },
        pincode: Number,
        landmark: { type: String, lowercase: true },
        city: { type: String, lowercase: true },
        state: { type: String, lowercase: true },
        isVerified: { type: Boolean },
        businessType: { type: String, lowercase: true },
    },
    signature: [],
    date: { type: Date },
    isCodOrder: {
        type: Boolean,
        default: false
    },
    cart: [{
        productId: { type: Schema.Types.ObjectId, ref: 'product' },
        quantity: { type: Number, default: 0 }
    }],
    timeSlot: [
        {
            slot: { type: String },
            value: {
                hr: { type: Number, default: 0 },
                min: { type: Number, default: 0 },
                minutes: { type: Number, default: 0 },
            },
            priority: { type: Number, default: null },
            isDisabled: { type: Boolean, default: false },
            isSelected: { type: Boolean, dafault: false },
            orderCount: { type: Number, default: 0 },
            created: Date,
            updated: Date
        }
    ]
});

sellerSchema.plugin(AutoIncrement, { inc_field: 'id', id: "sellerId" });

// mongoose.set('useCreateIndex', true);
// sellerSchema.index({ _id: -1, categoryIds: -1, cities: -1, product: -1 });

module.exports = mongoose.model('seller', sellerSchema);