// aqui se monta el server
const http = require('http')
const {app} = require("./app")

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


 
