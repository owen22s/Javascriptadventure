

const myimage = document.getElementById('myimage')
const mytitle = document.getElementById('mytitle')
const mybeschrijving = document.getElementById('mybeschrijving')
 let seizoenen = [
    {
        "titel":"seizoenen",
        "image":"img/seasons.jpg",
        "background":"green"
    
    },
    {
        "titel":"herfst",
        "image":"img/fall.jpg",
        "background":"orange"
    },
    {
        "titel":"winter",
        "image":"img/winter.jpg",
        "background":"white"
    },
    {
        "titel":"lente",
        "image":"img/spring.jpg",
        "background":"lightgreen"
    },
    {
        "titel":"zomer",
     "image":"img/summer.jpg"
    },
    ]
let titels = [
   "mijn schilderijen",
    "fall", "winter", "spring", "summer"
]
let beschrijvingen = [

]
function changeimage(index){
   mytitle.innerHTML = seizoenen[index].titel;
    myimage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].background
    


}
