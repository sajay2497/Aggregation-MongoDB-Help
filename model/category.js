let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);

let categorySchema = new Schema({
    name: { type: String, lowercase: true },
    _name: { type: String, lowercase: true },//grocery
    parentId: { type: Schema.Types.ObjectId, index: 1 },
    parentIntId: Number,
    parentIds: [],
    childIds: [],
    seo: {
        metaTitle: String,
        metaKeywords: [],
        metaDescription: String,
        canonical: String,
    },
    attributes: [],
    priority: Number,
    code: { type: String, default: '00' },
    urlKey: { type: String, lowercase: true },
    parent: { type: String, lowercase: true, default: 'root' },
    description: { type: String, lowercase: true },
    ldescription: { type: String, lowercase: true },
    longDescription: { type: String, lowercase: true },//grocery
    shortDescription: { type: String, lowercase: true },//grocery
    images: [],
    parentUrl: String,
    tree: [],
    isOrder: Boolean,
    isSubscription: Boolean,
    isActive: { type: Boolean, default: false, index: 1 },
    isRoot: { type: Boolean, default: false, index: 1 },
    isDeleted: { type: Boolean, default: false },
    updated: { type: Number },
    created: { type: Number },
    id: Number,
    isLeaf: { type: Boolean, default: false },
    seoUrl: { type: String, lowercase: true },
    returnPolicy: { type: String, lowercase: true },
    commission: { type: Number, default: 0 },
    date: { type: Date },
    level: Number,
});

categorySchema.plugin(AutoIncrement, { inc_field: 'id', id: "categoryId" });

// mongoose.set('useCreateIndex', true);
// categorySchema.index({ _id: -1, id: -1, childIds: -1, parentIds: -1 });

module.exports = mongoose.model('category', categorySchema);