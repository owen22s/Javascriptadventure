const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

const knopNoord = document.getElementById('knopNoord')
const knopOost = document.getElementById('knopOost')
const knopZuid = document.getElementById('knopZuid')
const knopWest = document.getElementById('knopWest')

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest')
}

let current_index = 0;

let lokaties =[
    {
        "titel":"Ingang Silver Bullet",
        "image":"img/0.jpg",
        "directions": {
            "zuid": 1 
        }

    },

    {
        "titel":"Gang Bij Docentenkamer",
        "image":"img/1.jpg",
        "directions": {
            "noord": 0,
            "west": 2, 
            "oost": 5,
            "zuid": 4
        }
    },

    {
        "titel":"Gang voor de trap",
        "image":"img/2.jpg",
        "directions": {
            "oost": 1,
            "west": 3
        }
    },

    {
        "titel":"kleine ruimte",
        "image":"img/3.jpg",
        "directions": {
            "noord": 2 
        }
    },

    {
        "titel":"docentenkamer",
        "image":"img/4.jpg",
        "directions": {
            "noord": 1
        }
    },

    {
        "titel":"gang voor C 0.90",
        "image":"img/5.jpg",
        "directions": {
            "west": 1,
            "noord": 10,
            "oost": 6
        }
    },

    {
        "titel":"gang voor toiletten",
        "image":"img/6.jpg",
        "directions": {
            "west": 5,
            "oost": 7,
            "zuid": 11
        }
    },{
      "titel":"gang bij 0.93",
      "image":"img/7.jpg",
      "directions": {
          "west": 6,
          "noord": 9,
          "zuid": 8
      }
  },

  {
      "titel":"lokaal 0.93",
      "image":"img/8.jpg",
      "directions": {
          "noord": 7
      }
  },

  {
      "titel":"lokaal 0.92",
      "image":"img/9.jpg",
      "directions": {
          "zuid": 7,
          "west": 10
      }
  },

  {
      "titel":"lokaal 0.90",
      "image":"img/10.jpg",
      "directions": {
          "oost": 9,
          "zuid": 5
      }
  },

  {
      "titel":"toiletten",
      "image":"img/11.jpg",
      "directions": {
          "noord": 6
      }
  }
]

//myTitle.innerHTML = "dit is door het script toegevoegd"
//myImage.src = "img/1.jpg"


function show(index){
  myTitle.innerHTML = lokaties[index].titel
  myImage.src = lokaties[index].image;
  current_index = index;

  updateDirections();
}

function updateDirections(){
  let possible = lokaties[current_index].directions;

  let possible_keys = Object.keys(possible);

  let button_keys = Object.keys(directionButtons);
  console.log(button_keys)

  for(const key of button_keys){
      directionButtons[key].style.visibility = "hidden";
  }

  for(const key of possible_keys){
      directionButtons[key].style.visibility = 'visible';
  }
}

function getInput(){
  show(myInput.value);
  //console.log(myInput.value)
  myInput.value = "";
  myInput.focus();
}

function goDirection(richting){
  let punt_index = lokaties[current_index].directions[richting];
  show(punt_index);
}

show(0);
