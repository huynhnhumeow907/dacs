"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const products_model_1 = __importDefault(require("../../models/products.model"));
const mongodb_1 = require("mongodb");
const create = (data, userId) => __awaiter(void 0, void 0, void 0, function* () {
    data.featured
        ? (data.featured = data.featured == "active" ? true : false)
        : data;
    data.position
        ? (data.position = parseInt(data.position))
        : (yield products_model_1.default.countDocuments()) + 1;
    data.createdBy = new mongodb_1.ObjectId(userId);
    const newProduct = new products_model_1.default(data);
    yield newProduct.save();
    return newProduct;
});
exports.create = create;
