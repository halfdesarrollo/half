"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const insumoSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    unidad: {
        type: String,
        required: true
    },
    costo: {
        type: Number,
        request: true
    },
    category: {
        type: [String],
        required: true
    },
    proveedor: {
        type: String,
        request: true
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.default = (0, mongoose_1.model)("insumo", insumoSchema);
