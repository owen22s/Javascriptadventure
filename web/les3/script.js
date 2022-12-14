

const myimage = document.getElementById('myimage')
const mytitle = document.getElementById('mytitle')
const mybeschrijving = document.getElementById('mybeschrijving')
 let paintings = [
    "img/COOL.jpg", 
    "img/AUWW.jpg", 
    "img/moll.jpg",
    "img/joecool.png",
    "img/SADFACE.jpg",
    "img/logovangamemuseum.jpg"]
let titels = [
    "de schilderijen van owen",
    "cool", "pijn", "moll", ":(", "logovangamemusuem"
]
let beschrijvingen = [
    "foto van man met hoofd pijn",
    "meter van hoe het gaat met mij",
    "meneer moll",
    "cool snoepie",
    "anime guy",
    "logo van game museum in zoetermeer"
]
function changeimage(index){
   mytitle.innerHTML = titels[index]
    myimage.src = paintings[index]
    mybeschrijving.innerHTML = beschrijvingen[index] 


}
