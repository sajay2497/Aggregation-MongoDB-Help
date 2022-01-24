let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let productSchema = new Schema({
    title: { type: String },
    price: { type: String },
    status: { type: Boolean },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    rating: { type: Object },
    id: { type: Number }
});

// mongoose.set('useCreateIndex', true);
// categorySchema.index({ _id: -1, id: -1, childIds: -1, parentIds: -1 });

module.exports = mongoose.model('product_agg3', productSchema);