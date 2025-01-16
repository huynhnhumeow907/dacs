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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.create = exports.index = void 0;
const index_service_1 = require("../../services/admin/index.service");
const index = (req, res) => {
    res.render("admin/pages/products/index.pug", {
        pageTitle: "Danh sách sản phẩm",
        pageDesc: "Danh sách sản phẩm",
    });
};
exports.index = index;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.query.status = "active";
    const getSize = yield index_service_1.sizeProductService.get(req.query);
    const getColor = yield index_service_1.colorProductService.get(req.query);
    res.render("admin/pages/products/create.pug", {
        pageTitle: "Thêm sản phẩm",
        pageDesc: "Thêm sản phẩm",
        getSize: getSize,
        getColor: getColor,
    });
});
exports.create = create;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const createProduct = yield index_service_1.productService.create(req.body, res.locals.INFOR_USER.id);
    res.json({
        code: 200,
    });
});
exports.createPost = createPost;
