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
const createdToken_1 = __importDefault(require("../../../Controllers/Token/createdToken"));
const user_1 = __importDefault(require("../../../Models/user"));
const roles_1 = __importDefault(require("../../../Models/roles"));
const router = (0, express_1.Router)();
router.post('/signUp', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, name, lastname, email, password, roles } = req.body;
        console.log("hola soy un role", roles);
        // Creating a new User Object
        let newUser = new user_1.default({
            username,
            name,
            lastname,
            email,
            password,
            roles
        });
        if (roles) {
            const foundRoles = yield roles_1.default.find({ name: { $in: roles } });
            newUser.roles = foundRoles.map((role) => role._id);
            console.log("holaaaaaa", roles_1.default);
        }
        else {
            const role = yield roles_1.default.findOne({ name: "user" });
            newUser.roles = [role._id];
        }
        // Saving the User Object in Mongodb
        const savedUser = yield newUser.save();
        //return res.status(201).json(newUser);
        return res.status(200).json({ token: (0, createdToken_1.default)(savedUser) });
    }
    catch (error) {
        return res.status(500).json(error);
    }
}));
exports.default = router;
