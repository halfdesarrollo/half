"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../../config/ConfigEntorno/config"));
const jsonwebtoken_1 = require("jsonwebtoken");
function createToken(user) {
    const accessToken = (0, jsonwebtoken_1.sign)({
        id: user.id
    }, config_1.default.jwtSecret, { expiresIn: 86400 });
    const refreshToken = (0, jsonwebtoken_1.sign)({
        id: user.id
    }, "refresh_secret", { expiresIn: '1w' });
    return { accessToken, refreshToken };
}
exports.default = createToken;
