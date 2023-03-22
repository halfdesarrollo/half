"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const proveedoresSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    cuit: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    web: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
});
exports.default = (0, mongoose_1.model)("proveedores", proveedoresSchema);
