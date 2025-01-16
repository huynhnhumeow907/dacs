"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_route_1 = __importDefault(require("./home.route"));
const index = (app) => {
    app.use("/", home_route_1.default);
};
exports.default = index;
