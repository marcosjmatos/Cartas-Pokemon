"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// aqui se monta el server
const http_1 = __importDefault(require("http"));
const app_1 = require("./app");
// const {buscaPokemon, leePokemon} = require('../Server/src/models-controllers-routes/pokemon.model')
const PORT = process.env.PORT || 3000;
const server = http_1.default.createServer(app_1.app);
function starServer() {
    server.listen(PORT, () => {
        console.log(`escuchando en puerto ${PORT}`);
    });
}
starServer();
// leePokemon()
