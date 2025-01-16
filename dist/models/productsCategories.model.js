const slug = require("mongoose-slug-updater");
const mongoose = require("mongoose");
const { statusProducts } = require("../constant/constant");
const productsCategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        slug: "name",
        unique: true,
    },
    parentId: {
        type: mongoose.SchemaTypes.ObjectId,
        default: null,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        default: null,
    },
    status: {
        type: String,
        enum: Object.values(statusProducts),
        required: true,
        default: statusProducts.ACVIVE,
    },
    position: {
        type: Number,
    },
    deleted: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    deletedBy: {
        type: mongoose.SchemaTypes.ObjectId,
    },
}, {
    timestamps: true,
    autoCreate: true,
    autoIndex: true,
    autoSearchIndex: true,
});
mongoose.plugin(slug);
const ProductCategory = mongoose.model("ProductCategory", productsCategoriesSchema);
module.exports = ProductCategory;
