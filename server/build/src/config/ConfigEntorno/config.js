"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    Db: process.env.URI || "mongodb+srv://Default2310:dUWDSYBmgpwjgu5x@cluster0.iqdewrr.mongodb.net/carteleriamannaPrueba",
    //------passport-----//
    //jwtsecret: process.env.JWT_SECRET || "mysecretmangacoffetoken",
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken'
};
