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
const clientes_1 = __importDefault(require("../../../Models/clientes"));
const router = (0, express_1.Router)();
router.get('/allclientes', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 12;
        const clientes = yield clientes_1.default.find()
            .skip(page * limit)
            .limit(limit);
        const total = yield clientes_1.default.countDocuments({
        // username: {$regex: search, $options: 'i'},
        });
        const response = {
            error: false,
            total,
            page: page + 1,
            totalPages: Math.ceil(total / limit),
            limit,
            clientes,
        };
        console.log("hola soy un total", total);
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
