"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ROLES = ["user", "impresiones", "vendedor", "carteleria", "gerente"];
const roleSchema = new mongoose_1.default.Schema({
    name: String,
}, {
    versionKey: false,
});
exports.default = mongoose_1.default.model("Role", roleSchema);
