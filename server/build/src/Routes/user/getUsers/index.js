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
const roles_1 = __importDefault(require("../../../Models/roles"));
const user_1 = __importDefault(require("../../../Models/user"));
const router = (0, express_1.Router)();
router.get('/allusers', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 12;
        const search = req.query.search || '';
        let sort = req.query.sort || 'username';
        let roles = req.query.roles || 'all';
        const rolesAll = yield roles_1.default.find();
        console.log("hola", rolesAll);
        const rolesOptions = rolesAll.map(role => role._id);
        const rolesName = rolesAll.map(role => role.name);
        roles === 'all'
            ? (roles = [...rolesOptions])
            : (roles = req.query.roles.split(','));
        req.query.sort ? (sort = req.query.sort.split(',')) : (sort = [sort]);
        let sortBy = {};
        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        }
        else {
            sortBy[sort[0]] = 'asc';
        }
        const roleArray = yield roles_1.default.find({ name: roles });
        const roleId = roleArray.map(role => role._id);
        roleId.length && (roles = roleId);
        console.log("hola", roleArray);
        const users = yield user_1.default.find({ username: { $regex: '.*' + search + '.*', $options: 'i' } })
            .where('roles')
            .in([...roles])
            .sort(sortBy)
            .skip(page * limit)
            .limit(limit)
            .populate('roles');
        const total = yield user_1.default.countDocuments({
            roles: { $in: [...roles] },
            username: { $regex: search, $options: 'i' },
        });
        const response = {
            error: false,
            total,
            page: page,
            totalPages: Math.ceil(total / limit),
            limit,
            roles: rolesName,
            users,
        };
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
