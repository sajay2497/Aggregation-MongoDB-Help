let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let orderSchema = new Schema({
    productName: { type: String },
    status: { type: String },
    quantity: { type: Number },
});

// mongoose.set('useCreateIndex', true);
// categorySchema.index({ _id: -1, id: -1, childIds: -1, parentIds: -1 });

module.exports = mongoose.model('order', orderSchema);