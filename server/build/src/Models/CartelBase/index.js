"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const cartelBaseSchema = new mongoose_1.Schema({
    grupo: {
        type: [String],
        required: true
    },
    descripcion: {
        type: String,
        request: true
    },
    faz1: {
        type: Number,
        request: true
    },
    faz2: {
        type: Number,
        request: true
    }
}, {
    timestamps: true,
    versionKey: false,
});
exports.default = (0, mongoose_1.model)("carteles", cartelBaseSchema);
