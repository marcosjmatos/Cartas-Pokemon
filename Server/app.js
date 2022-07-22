"use strict";
// aqui van todos los app.use.....
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
exports.app = app;
const env = require('dotenv').config({ path: '../.env' });
exports.env = env;
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
}));
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "client")));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "client", "index.html"));
});
