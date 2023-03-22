"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const cartelesSchema = new mongoose_1.Schema({
    insumosArray: {
        type: [Object],
        request: true,
    },
    category: {
        type: [String],
        request: true
    },
    descripcion: {
        type: String,
        request: true
    },
    costo1faz: {
        type: Number,
        required: true
    },
    costo2faz: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.default = (0, mongoose_1.model)("carteles", cartelesSchema);
