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
const router = (0, express_1.Router)();
router.post('/signIn', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ msg: "Please. Send your email and password" });
    }
    const user = yield user_1.default.findOne({ email: req.body.email }).populate("roles");
    if (!user) {
        return res.status(400).json({ msg: "The User does not exists" });
    }
    const isMatch = yield user.comparePassword(req.body.password);
    if (isMatch) {
        const { accessToken, refreshToken } = (0, createdToken_1.default)(user);
        return res.status(200).json({ accessToken, refreshToken });
    }
    return res.status(400).json({
        msg: "The email or password are incorrect"
    });
}));
exports.default = router;
