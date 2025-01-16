"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const admin_routes_1 = __importDefault(require("./admin.routes"));
const ROUTERS = {
    ADMIN: admin_routes_1.default,
    CLIENT: {},
};
exports.default = ROUTERS;
