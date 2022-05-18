// aqui se monta el server
import http from "http"
import {app} from "./app"

// const {buscaPokemon, leePokemon} = require('../Server/src/models-controllers-routes/pokemon.model')

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

function starServer() {
    server.listen(PORT, ()=>{
        console.log(`escuchando en puerto ${PORT}`)
    })
}

starServer()
// leePokemon()


 
