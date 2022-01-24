let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let categorySchema = new Schema({
    categoryName: { type: String },
    img: { type: String },
    status: { type: Boolean },
});

// mongoose.set('useCreateIndex', true);
// categorySchema.index({ _id: -1, id: -1, childIds: -1, parentIds: -1 });

module.exports = mongoose.model('category_agg3', categorySchema);