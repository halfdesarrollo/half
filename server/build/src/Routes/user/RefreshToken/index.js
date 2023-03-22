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
const express_1 = require("express");
const user_1 = __importDefault(require("../../../Models/user"));
const createdToken_1 = __importDefault(require("../../../Controllers/Token/createdToken"));
const jsonwebtoken_1 = require("jsonwebtoken");
const router = (0, express_1.Router)();
router.post("/refresh", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const refresToken = req.headers["x-access-token"];
        const payload = (0, jsonwebtoken_1.verify)(refresToken, 'refresh_secret');
        if (!payload) {
            return res.status(401).send({ message: 'unauthenticated a' });
        }
        const user = yield user_1.default.findById(payload.id);
        const { accessToken, refreshToken } = (0, createdToken_1.default)(user);
        return res.status(200).json({ accessToken, refreshToken });
    }
    catch (error) {
        return res.status(401).send({ message: 'unauthenticated' });
    }
}));
exports.default = router;
