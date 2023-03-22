"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../../config/ConfigEntorno/config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ReadTokenData = (authorization) => {
    const header = authorization.split(' ');
    let token = header[1];
    let data;
    jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret, (err, decoded) => {
        if (err) {
            console.log('Error al obtener data del token');
        }
        else {
            data = decoded;
        }
    });
    return data;
};
exports.default = ReadTokenData;
