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
const user_1 = __importDefault(require("../../../Models/user"));
const router = (0, express_1.Router)();
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const idUser = req.query.idUser;
    try {
        let deleteOrdenes = yield ordenes_1.default.findByIdAndDelete(id);
        res.status(200).json({ message: 'insumo deleted' });
        const user = yield user_1.default.findById(idUser);
        if (user) {
            var deleteOrden = yield user.ordenes.filter((e) => e !== id);
            user.ordenes = deleteOrden;
            console.log("hola so una orden user", user);
        }
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
