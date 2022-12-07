console.log("script is geladen")

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

function zetinfruitla(fruit){
    console.log(fruit);



    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = fruit;
    fruitvak.appendChild(nieuwElement);

}
function zetingroentela(groente){
    console.log(groente);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = groente;
    groentevak.appendChild(nieuwElement);

}