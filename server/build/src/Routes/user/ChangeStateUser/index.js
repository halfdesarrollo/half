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
const router = (0, express_1.Router)();
router.put('/state', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, state } = req.body;
    console.log("hola", id, state);
    yield user_1.default.findByIdAndUpdate(id, {
        state
    });
    // Send response in here
    res.send('Item Updated!');
    console.log("hola", id, state);
}));
exports.default = router;
