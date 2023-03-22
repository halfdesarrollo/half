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
router.post('/create', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser, fecha, cliente, fechaentrega, resta, restaHistory, montototal, vendedor, contacto, stateImpresiones, carteles, stateCarteleria, operacion, lugardecolocacion, seña, formadepago, facturanum, observaciones } = req.body;
    console.log("hkikakakaka", stateImpresiones, stateCarteleria);
    try {
        const ordenesNew = new ordenes_1.default({ fecha, cliente, resta, restaHistory, contacto, vendedor, stateImpresiones, stateCarteleria, carteles, operacion, lugardecolocacion, seña, formadepago, fechaentrega, facturanum, observaciones, montototal });
        yield ordenesNew.save();
        const user = yield user_1.default.findById(idUser);
        if (user) {
            user.ordenes.push(ordenesNew);
            yield user.save(ordenesNew);
            console.log("hola soy un user", ordenesNew._id, user);
        }
        res.status(201).json('insumo adherido correctamente');
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
