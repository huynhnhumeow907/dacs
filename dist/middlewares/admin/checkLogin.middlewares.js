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
const index_routes_1 = __importDefault(require("../../constants/routes/index.routes"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const accounts_model_1 = __importDefault(require("../../models/accounts.model"));
const checkLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.cookies.token) {
            res.redirect(`/${index_routes_1.default.ADMIN.AUTH}${index_routes_1.default.ADMIN.LOGIN}`);
            return;
        }
        else {
            const user = jsonwebtoken_1.default.verify(req.cookies.token, process.env.JWT_SECRET);
            const INFOR_USER = yield accounts_model_1.default.findById({ _id: user.id }).select("-token -password");
            res.locals.INFOR_USER = INFOR_USER;
            if (user.id)
                next();
        }
    }
    catch (error) {
        res.cookie("closeSession", "true");
        res.redirect(`/${index_routes_1.default.ADMIN.AUTH}${index_routes_1.default.ADMIN.LOGIN}`);
        return;
    }
});
exports.default = checkLogin;
