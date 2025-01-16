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
    res.render("admin/pages/accounts/index.pug", {
        pageTitle: "Danh sách tài khoản quản trị",
        pageDesc: "Danh sách tài khoản quản trị",
    });
};
exports.index = index;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.query.deleted = "false";
    req.query.status = "active";
    const listRole = yield index_service_1.rolesService.get(req.query);
    res.render("admin/pages/accounts/create.pug", {
        pageTitle: "Thêm tài khoản quản trị",
        pageDesc: "Thêm tài khoản quản trị",
        listRole: listRole,
    });
});
exports.create = create;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newAccount = yield index_service_1.accountsService.create(req.body);
    res.json({
        code: 200,
    });
});
exports.createPost = createPost;
