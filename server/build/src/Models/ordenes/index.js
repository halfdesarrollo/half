"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const ordenesSchema = new mongoose_1.Schema({
    fecha: {
        type: Date,
        required: true
    },
    cliente: {
        type: String,
        required: true
    },
    vendedor: {
        type: String,
        required: true
    },
    contacto: {
        type: String,
        required: true
    },
    resta: {
        type: Number,
        request: true
    },
    stateCarteleria: {
        type: String,
        default: "pendiente"
    },
    stateImpresiones: {
        type: String,
        default: "pendiente"
    },
    carteles: {
        type: [Object],
        required: true
    },
    restaHistory: {
        type: [Object],
        request: true
    },
    operacion: {
        type: String,
        required: true
    },
    lugardecolocacion: {
        type: String,
        required: true
    },
    seña: {
        type: Number,
        required: true
    },
    formadepago: {
        type: String,
        required: true
    },
    fechaentrega: {
        type: Date,
        required: true
    },
    facturanum: {
        type: String,
        required: true
    },
    montototal: {
        type: Number,
        required: true
    },
    observaciones: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
});
exports.default = (0, mongoose_1.model)("ordenes", ordenesSchema);
