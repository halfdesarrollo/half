"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
//import passport from 'passport'
const index_1 = __importDefault(require("./Routes/index"));
const passport_1 = __importDefault(require("passport"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const passport_2 = __importDefault(require("./middlewares/passport/passport"));
require("../src/config/mongodb/db");
const cors_1 = __importDefault(require("cors"));
const initialSetUp_1 = require("./Lib/initialSetUp");
const server = (0, express_1.default)();
exports.server = server;
//const IoServer = http.createServer(server);
(0, initialSetUp_1.createRoles)();
server.use(express_1.default.json());
//-------------------cors config--------------------//
server.use(express_1.default.urlencoded({ extended: true, limit: '50mb' })); //middleware
server.use(express_1.default.json({ limit: '50mb' }));
server.use((0, cookie_parser_1.default)());
server.use((0, morgan_1.default)('dev'));
server.use((0, cors_1.default)());
server.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    next();
});
//passport
server.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
//routes
server.use('/api', index_1.default);
//cors
//server.use(cors());
server.use((err, _req, res, _next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send({ message });
});
