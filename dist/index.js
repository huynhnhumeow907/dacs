"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const index_route_1 = __importDefault(require("./routes/client/index.route"));
const index_route_2 = __importDefault(require("./routes/admin/index.route"));
const index_routes_1 = __importDefault(require("./constants/routes/index.routes"));
require("./database/mongodb.connect");
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT) | 3000;
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");
app.locals.ROUTERS = index_routes_1.default;
app.use(express_1.default.static(`${__dirname}/public`));
app.use(`/tinymce`, express_1.default.static(path_1.default.join(__dirname, "..", "node_modules", "tinymce")));
(0, index_route_1.default)(app);
(0, index_route_2.default)(app);
app.listen(port, () => {
    console.log(`Đang lắng nghe cổng ${port} - http://localhost:${port}/${index_routes_1.default.ADMIN.AUTH}${index_routes_1.default.ADMIN.PRODUCT.PATH}${index_routes_1.default.ADMIN.PRODUCT.INDEX}`);
});
