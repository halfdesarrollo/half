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
const ordenes_1 = __importDefault(require("../../../Models/ordenes"));
const moment_1 = __importDefault(require("moment"));
const router = (0, express_1.Router)();
router.get('/ordenesbydate', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const date1 = req.query.date1;
    const date2 = req.query.date2;
    console.log("holaaaaaaaaaaaaaaaaaaaaaaaaa", (0, moment_1.default)(date1).format("L"), (0, moment_1.default)(date2).format("L"));
    try {
        const ordenesOrigin = yield ordenes_1.default.find()
            .populate('carteles');
        let busca = ordenesOrigin.filter((n) => (0, moment_1.default)(n.fecha).format("L") >= (0, moment_1.default)(date1).format("L") &&
            (0, moment_1.default)(n.fecha).format("L") <= (0, moment_1.default)(date2).format("L"));
        var ordenes = busca;
        res.status(200).json(ordenes);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
