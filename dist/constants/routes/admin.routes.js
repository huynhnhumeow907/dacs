"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encodeRouterPaths_1 = require("../../helpers/encodeRouterPaths");
const ROUTER_ADMIN = {
    AUTH: process.env.ADMIN,
    LOGIN: "/Đăng_nhập_quản_trị",
    PRODUCT: {
        PATH: "/Sản_phẩm",
        INDEX: "/Tổng_quan",
        CREATE: "/Tạo_sản_phẩm",
        READ: "/Chi_sản_phẩm",
        UPDATE: "/Cập_nhật_sản_phẩm",
        DELETE: "/Xóa_sản_phẩm",
    },
    ROLES: {
        PATH: "/Nhóm_quyền",
        INDEX: "/Tổng_quan",
        CREATE: "/Tạo_nhóm_quyền",
        READ: "/detail",
        UPDATE: "/update",
        DELETE: "/delete",
    },
    ACCOUNT: {
        PATH: "/Tài_khoản",
        INDEX: "/Tổng_quan",
        CREATE: "/Tạo_tài_khoản",
        READ: "/detail",
        UPDATE: "/update",
        DELETE: "/delete",
    },
    COLOR_PRODUCT: {
        PATH: "/Màu_sản_phẩm",
        INDEX: "/Tổng_quan",
        CREATE: "/Tạo_màu_sản_phẩm",
        READ: "/detail",
        UPDATE: "/update",
        DELETE: "/delete",
    },
    SIZE: {
        PATH: "/Kích_thước_sản_phẩm",
        INDEX: "/Tổng_quan",
        CREATE: "/Tạo_kích_thước_sản_phẩm",
        READ: "/detail",
        UPDATE: "/update",
        DELETE: "/delete",
    },
};
const ENCODED_ROUTER_ADMIN = (0, encodeRouterPaths_1.encodeRouterPathsSync)(ROUTER_ADMIN);
exports.default = ENCODED_ROUTER_ADMIN;
