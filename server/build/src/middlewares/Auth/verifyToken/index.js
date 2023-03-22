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
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config/ConfigEntorno/config"));
const user_1 = __importDefault(require("../../../Models/user"));
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token = req.headers["x-access-token"];
    if (!token)
        return res.status(403).json({ message: "No token provided" });
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret);
        req.userId = decoded.id;
        const user = yield user_1.default.findById(req.userId, { password: 0 });
        if (!user)
            return res.status(404).json({ message: "No user found" });
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Unauthorized!" });
    }
});
exports.verifyToken = verifyToken;
