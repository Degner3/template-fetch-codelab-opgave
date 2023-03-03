/* Opgave 1*/
// din kode her

const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");


fetch(userURI)


  .then((response) => {
    // console.log('response: ', response);
    return response.json();
  })

  .then((data) => {
    myUserData = data;
    // console.log(myUserData);
    buildUsers(myUserData);
  })
  
  .catch((error) => {
    // console.error(error);
  });

function buildUsers(myUserData) {
    
    myUserData.map((myUser) => {
        let myUserHTML = `<h2>${myUser.name}</h2>
        <p>Adresse: ${myUser.address.street}  ${myUser.address.suite}</br>
        post nummer: ${myUser.address.zipcode}</br>
        by: ${myUser.address.city}</p>`;
        myUserlistElement.innerHTML += myUserHTML;
           
    });

};

/*
fetch()
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
*/

/* Opgave 2*/

// din kode her




/* Opgave 3 - skriv videre på koden her: */
const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");

let myStorydata = null


fetch(myDataFileUrl)


  .then((response) => {
    // console.log('response: ', response);
    return response.json();
  })

  .then((data) => {
    myLanguage = data;
    // console.log(myLanguage);
    setUpStory(myLanguage);
  })
  
  .catch((error) => {
    // console.error(error);
  });



function setUpStory(myLanguage) {
    let myStory = null;

    switch (myLanguage) {
        case "DK":
            myStory = myStorydata.DK;
            break;

        case "SE":
            myStory = myStorydata.SE;
            break;
        
        case "FI":
            myStory = myStorydata.FI;
            break;

        case "UK":
            myStory = myStorydata.UK;
            break;
    
        default:
            myStory = myStorydata.DK;
            break;
    };

}

function createStory(myStory) {

    createButtons();

    

}


function createButtons() {
    
    let myDkbutton = document.createElement("button");
    myDkbutton.innerText = "Dansk";

    let mySebutton = document.createElement("button");
    mySebutton.innerText = "Svensk";

    let myFibutton = document.createElement("button");
    myFibutton.innerText = "Finsk";

    let myUkbutton = document.createElement("button");
    myUkbutton,innerText = "engelsk";


}





/* Opgave 3*/
// din kode her

const myListElement = document.getElementById("userSelect");
const myPostElement = document.getElementById("userPosts");

//entry point
getUsers("https://jsonplaceholder.typicode.com/users");

