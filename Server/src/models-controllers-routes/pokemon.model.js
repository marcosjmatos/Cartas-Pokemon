// aqui van todas las funciones que interactuan con la data de manera directa
const fs = require('fs');
const path = require('path');

const pokemonesFiltrados = [];

const rutaData = path.join(__dirname,"..","..","data","pokemon-tcg-data","cards","en","base1.json");



// async function leePokemon() {
//     return new Promise((resolve,reject)=>{
//         const dataLeida = fs.createReadStream((rutaData),"utf8");
//         dataLeida.on("data", (data)=>{
//             filtraPokemon(data)
//             console.log(data)
//         })
//         .on("error",(err)=>{
//             console.log(err)
//             reject()
//         })
//         .on("end",()=>{
//             console.log("fin")
//             resolve();
//         })
//     })
// }


// function filtraPokemon(pokemon) {
//     return pokemon["name"] === "Alakazam" && pokemon["id"] === "base1-1"
// };
module.exports = {
    // leePokemon,
}