"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const presupuestoSchema = new mongoose_1.Schema({
    fecha: {
        type: Date,
        required: true
    },
    orden: {
        type: Boolean,
        default: false
    },
    clientes: {
        type: String,
        required: true
    },
    carteles: {
        type: [Object],
        required: true
    },
    operacion: {
        type: String,
        required: true
    },
    contacto: {
        type: String,
        required: true
    },
    lugardecolocacion: {
        type: String,
        required: true
    },
    formadepago: {
        type: [String],
        required: true
    },
    fechavalida: {
        type: Date,
        required: true
    },
    montototal: {
        type: Number,
        required: true
    },
    plazodeentrega: {
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
exports.default = (0, mongoose_1.model)("presupuesto", presupuestoSchema);
