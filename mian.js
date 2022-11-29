/*
const URL = "https://restcountries.com/v3.1/all"
const name = "peru"


fetch(URL)
    .then(Response => Response.json())
    .then(
json =>{

    let aleatorio = 123;
    console.log(json[aleatorio].name.nativeName)
}

    )
*/

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const pregunta = document.getElementById("pregunta")

const fetchData = async () => {
    try{
const res = await fetch("https://restcountries.com/v3.1/all")
const data = await res.json() 

paises(data)
console.log(data)
    }catch(error){
        console.log(error)
    }
}

const paises = data =>{
    let elementos = ""
   
    data.forEach(elememt => {
       
        elementos += `
        <article class="card">
        <img src=${elememt.flags.png} alt="">
        <div class="card-content">
            <h3>${elememt.name.common}</h3>
            <button>${elememt.name.common}</button>
            <button>${elememt.name.common}</button>
            <button>${elememt.name.common}</button>
        </div>
        </article>
        `
    });
 pregunta.innerHTML = elementos
}

