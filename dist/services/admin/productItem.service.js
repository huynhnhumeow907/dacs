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
const mongodb_1 = require("mongodb");
const product_items_model_1 = __importDefault(require("../../models/product-items.model"));
const create = (productId, bien_the, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const listData = JSON.parse(bien_the);
    const result = [];
    listData.forEach((it) => {
        const data = {
            productId: new mongodb_1.ObjectId(productId),
            color: new mongodb_1.ObjectId(it.color),
            size: new mongodb_1.ObjectId(it.size),
            price: parseInt(it.price),
            discount: parseInt(it.discount),
            quantity: parseInt(it.quantity),
            createdBy: new mongodb_1.ObjectId(userId),
            status: it.status,
        };
        result.push(data);
    });
    yield product_items_model_1.default.insertMany(result);
});
exports.create = create;
