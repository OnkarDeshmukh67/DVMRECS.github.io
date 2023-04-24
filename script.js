// HAMBURGER STARTS HERE


function OnClick(){
  document.getElementById("bun").classList.toggle("icon");
  document.getElementById("search-container").classList.toggle("search-window")
}


// HAMBURGER ENDS HERE

// REMOVE HAMBURGER ON SCROLL STARTS HERE

  let removeBun = document.getElementById('hamburger')

  window.addEventListener('scroll', () => {

    const Scrollposition = window.scrollY;

    if(Scrollposition >= 266){
      removeBun.style.display = 'none';
    } else {
      removeBun.style.display = 'block';
    }
  })


// REMOVE HAMBURGER ON SCROLL ENDS HERE



// ARRAY OF ALL THE CARDS STARTS HERE 

var allCards = [];
allCards = document.getElementsByClassName("job-template");

// ARRAY OF ALL THE CARDS ENDS HERE


// FETCHING THE ID OF ALL THE CARDS AND DISPLAY NONE STARTS HERE

function idFetcher (array, property) {
  let result = [];

  for (let index = 0; index < array.length ; index++) {
      result.push(array[index][property]);
  }
  return result;
}

let idList = idFetcher(allCards, "id");

function removeCard (array) {
  for (let index = 0; index < array.length ; index++) {
    let a = document.getElementById(array[index]);
    a.style.display = 'none';
  }
}
// removeCard (idList);

// FETCHING THE ID OF ALL THE CARDS ENDS HERE

// RANDOM CARDS TO BE DISPLAYED STARTS HERE

function randomCard (array, cards) {
  let random = [];

  for (let index = 0; index < cards; index++) {
      
     var n = Math.floor(Math.random()*(cards+1));

      random.push(array[n]);
  }
  return random;
}

// let randomCardsArray = randomCard(idList, 10);
// console.log(randomCardsArray);

// function showCards (array) {
//   for (let index = 0; index < array.length; index++) {
//       let c = document.getElementById(array[index]);
//       c.style.display = 'block';
//   }
// }

// window.addEventListener('load', showCards(randomCardsArray));

// RANDOM CARDS TO BE DISPLAYED ENDS HERE



// OBJECT ARRAY STARTS HERE

let cardObjectArray = [
  {
    id: "#CSE-A",
    type: "A",
    country: "INDIA",
    state: "MAHARSHTRA",
    company: "ZOTO",
    nature: "FULL-TIME",
  },  {
    id: "#CSE-B",
    type: "B",
    country: "FRANCE",
    state: "Bretagne",
    company: "HARPER",
    nature: "PART-TIME",
  },  {
    id: "#CSE-C",
    type: "C",
    country: "INDIA",
    state: "HARYANA",
    company: "HARPER",
    nature: "FULL-TIME",
  },  {
    id: "#CSE-D",
    type: "D",
    country: "UNITED STATES",
    state: "ARIZONA",
    company: "ZOTO",
    nature: "PART-TIME",
  },  {
    id: "#CSE-E",
    type: "E",
    country: "INDIA",
    state: "MAHARASHTRA",
    company: "KEVEN",
    nature: "FULL-TIME",
  },  {
    id: "#ME-A",
    type: "A",
    country: "FRANCE",
    state: "Bretagne",
    company: "ZOTO",
    nature: "PART-TIME",
  },  {
    id: "#ME-B",
    type: "A",
    country: "INDIA",
    state: "HARYANA",
    company: "KEVEN",
    nature: "PART-TIME",
  },  {
    id: "#ME-C",
    type: "A",
    country: "FRANCE",
    state: "Corse",
    company: "ZOTO",
    nature: "FULL-TIME",
  },  {
    id: "#ME-D",
    type: "A",
    country: "UNITED STATES",
    state: "INDIANA",
    company: "HARPER",
    nature: "PART-TIME",
  },  {
    id: "#ME-E",
    type: "A",
    country: "INDIA",
    state: "HARYANA",
    company: "KEVEN",
    nature: "FULL-TIME",
  },  {
    id: "#CE-A",
    type: "A",
    country: "UNITED STATES",
    state: "ARIZONA",
    company: "ZOTO",
    nature: "PART-TIME",
  },  {
    id: "#CE-B",
    type: "A",
    country: "UNITED STATES",
    state: "INDIANA",
    company: "KEVEN",
    nature: "PART-TIME",
  },  {
    id: "#CE-C",
    type: "C",
    country: "UNITED STATES",
    state: "ARIZONA",
    company: "HARPER",
    nature: "FULL-TIME",
  },  {
    id: "#CE-D",
    type: "D",
    country: "FRANCE",
    state: "Corse",
    company: "HARPER",
    nature: "FULL-TIME",
  },  {
    id: "#CE-E",
    type: "E",
    country: "FRANCE",
    state: "Bretagne",
    company: "KEVEN",
    nature: "PART-TIME",
  },
];

// OBJECT ARRAY ENDS HERE



// SEARCH FUNCTION STARTS HERE 




// SEARCH FOR FULL-TIME/PART-TIME

let time =document.getElementById("time");



time.addEventListener('change', function(e) {
  const timeValue = e.target.value;
  console.log(timeValue);

  for (let index = 0; index < cardObjectArray.length; index++) {
    let b =cardObjectArray[index]["id"];
    const a =document.querySelectorAll(b); 

    let c = cardObjectArray[index]["id"];
    const d =document.querySelectorAll(c);

    if (cardObjectArray[index]["nature"] === `${timeValue}`) { 

      a.forEach(function(item) {
        item.style.display = 'block';
      });
      console.log(a);
    } else if (cardObjectArray[index]["nature"] != `${timeValue}` && `${timeValue}` === "ALL") {
      d.forEach(function(item) {
        item.style.display = 'block';
      });
    }  else if (cardObjectArray[index]["nature"] != `${timeValue}`) {
      a.forEach(function(item) {
        item.style.display = 'none';
      });
    }
  }
});




// SEARCH FOR JOB-NAME

let Job = document.getElementById('job');

Job.addEventListener('input', function (e) {
  const alp = '' + e.target.value;
  var jobValue = alp.toUpperCase();

  

    for (let index = 0; index < cardObjectArray.length; index++) {
    let b =cardObjectArray[index]["id"];
    const a =document.querySelectorAll(b); 

    let c = cardObjectArray[index]["id"];
    const d =document.querySelectorAll(c);

  

    if (cardObjectArray[index]["id"] != '#' + `${jobValue}`) { 
      
      a.forEach(function(item) {
        item.style.display = 'none';
      });
      
    } else if (cardObjectArray[index]["id"] === '#' + `${jobValue}`) {
      
      a.forEach(function(item) {
        item.style.display = 'block';
        
      });    
    } 
  }
});


// SEARCH WITH API

let State =document.getElementById('state');

State.addEventListener('input', function (event) {
   
    let stateValue = event.target.value;
        
         const place = 'dvm.json'
         let Countryname;
   
         fetch(place)
         .then(response => response.json())
         .then(data => {
         
             for (let i = 0; i < data.length; i++) {
              var kuch = data[i]
               for (let j = 0; j < data[i].states.length ; j++) {
                var kuchb = data[i].states[j]
                 if(kuchb.name === stateValue){
                  Countryname = data[i].name; 
                     console.log(Countryname);

                       console.log(Countryname);
   let Country = "" + Countryname;
   let autoCountry = Country.toUpperCase();
   

                   const inputElement = document.querySelector('#country');
                   inputElement.placeholder = autoCountry;
   
    for (let index = 0; index < cardObjectArray.length; index++) {
    let b =cardObjectArray[index]["id"];
    const a =document.querySelectorAll(b); 

    let c = cardObjectArray[index]["id"];
    const d =document.querySelectorAll(c);

  

    if (cardObjectArray[index]["country"] != autoCountry) { 
      a.forEach(function(item) {
        item.style.display = 'none';
      });
      
    } else if (cardObjectArray[index]["country"] === autoCountry) {
      a.forEach(function(item) {
        item.style.display = 'block';        
      });    
    } 
  }
                 }
              } 
           }
        });
   


   
});

















