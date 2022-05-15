// const {env} = require('../Server/app')
// aqui el front end interactua con el backend a traves de los diferentes metodos document, window
let pkmnFound = [];


//take the form element and store his string value
const pkmnForm = document.querySelector("#form")

const docFrag = document.createDocumentFragment()


const fotoPkmn = document.getElementById("pokemondiv")

//brings the array of all Pkmn TCG

async function leePokemon(name) {
    try {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${name}`,{
            headers:{
                "X-Api-Key":"b2e95d11-1d67-43eb-ad9c-72ee1f0df5be"
            }
        });
        const data =  await response.json();
        return data;
        
    } catch(err) {

        alert("Pokemon no existe!")
        return err;

    }
    
}



function createImg(url) {
    const img = document.createElement("img")
    img.setAttribute("src",url);
    img.setAttribute("id","pokm");
    docFrag.appendChild(img)
}

function creaDivHijo(){
    const newDiv = document.createElement("div")
    newDiv.setAttribute("class","hijo")
    fotoPkmn.appendChild(newDiv)
    console.log(newDiv);  
    
}


pkmnForm.addEventListener("submit",async (e)=>{
    e.preventDefault()
    const pkmnName = document.querySelector("#pokemon_name").value
    const {data:pkmnList} = await leePokemon(pkmnName.toLowerCase());
    const pkmnImg = pkmnList.map((pokemon)=>{
        return pokemon.images.small
    });
    //verify if the pokemon exist
    if (pkmnImg.length === 0) {
        console.log("error!")
        alert("Pokemon no Existe!")
        return
    }
    //verifica si ya hay imagenes y las borra de ser así
    if (fotoPkmn.hasChildNodes()){
        fotoPkmn.removeChild(fotoPkmn.childNodes[0])
    }
    creaDivHijo()
    const fotoPkmnNew = document.querySelector(".hijo")
    for (const img of pkmnImg) {
        createImg(img)
    }
    
    console.log(fotoPkmnNew);
    fotoPkmnNew.appendChild(docFrag)
}
)


