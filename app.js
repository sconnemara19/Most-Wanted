
"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/
// app is the function called to start the entire application
function app(people){
 
 let searchType = prompt("Do you know the ID of the person you are looking for? Enter 'yes' or 'no'").toLowerCase();
 let searchResults;
 switch(searchType){
   case 'yes':
   searchResults = searchById(people);
     break;
   case 'no':
   searchResults = searchTraits(people);
    // searchbyTrait(people)
     //prompt("Search By Trait; Enter 'Gender', 'Eye Color','Occupation'")
     break;
     default:
   app(people); // restart app
     break;
 }
 // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
 mainMenu(searchResults, people);
}
// Menu function to call once you find who you are looking for
function mainMenu(person, people){


 /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
 if(!person){
   alert("Could not find that individual.");
   return app(people); // restart

 }
  if (person[0].parents.length == 0) 
    {
      person[0].parents = "Does not have parents";
    }

  if (person[0].currentSpouse == null) 
    {
      person[0].currentSpouse = "Does not have a spouse";
    }



if (person.length <= 1) {
 let displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " Select from the options below:  'Gender', 'DOB, 'Height', 'Weight', 'Eyecolor', 'Occupation', 'Parents', 'Current Spouse', 'Info' (display all), or 'restart' or 'quit'");
    

 switch(displayOption){
   case "info": console.log(person[0]);
   // TODO: get person's info
   break;
   case "Current Spouse": console.log(person[0].currentSpouse);
   // TODO: get person's family
   break;
   case "gender": console.log(person[0].gender);
   // TODO: get person's info
   break;
   case "dob": console.log(person[0].dob);
   // TODO: get person's family
   break;
   case "height": console.log(person[0].height);
   // TODO: get person's info
   break;
   case "weight": console.log(person[0].weight);
   // TODO: get person's family
   break;
    case "eyecolor": console.log(person[0].eyeColor);
   // TODO: get person's info
   break;
   case "occupation": console.log(person[0].occupation);
   // TODO: get person's family
   break;
    case "parents": console.log(person[0].parents);
   // TODO: get person's info
   break;
   case "restart":
   app(people); // restart
   break;
   case "quit":
   return; // stop execution
   default: console.log("Item cannot be found");

   return mainMenu(person, people); // ask again
 
    }
    mainMenu(person, people);


  }
  else {
    displayPeople(person);
      }
        let results = searchTraits(person);
mainMenu(results);

}
function searchById(people){
let idVariable = parseInt(prompt("PLease Enter the ID#"));

 let foundId = people.filter(function(person){
   if(person.id === idVariable){
     return true;
   }
   else{
     return false;
   }
 })


 // TODO: find the person using the name they entered
 return foundId;
}
// alerts a list of people
function displayPeople(people){
 alert(people.map(function(person){
   return person.firstName + " " + person.lastName;
 }).join("\n"));
}

function displayPerson(person){
 // print all of the information about a person:
 // height, weight, age, name, occupation, eye color.
 let personInfo = "First Name: " + person.firstName + "\n";
 personInfo += "Last Name: " + person.lastName + "\n";
 // TODO: finish getting the rest of the information to display
 alert(personInfo);
}
// function that prompts and validates user input
function promptFor(question, valid){
 do{
   let response = prompt(question).trim();
 } while(!response || !valid(response));
 return response;
}
// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
 if (input = yes)
 {
   input.toLowerCase () == "yes";
 }else
 input.toLowerCase () == "no";
 return input;
}
// helper function to pass in as default promptFor validation
function chars(input){
 return true; // default validation only
}


function searchTraits(people){
 let userInput = prompt("Do you want to search by individual traits? Type in a trait. 'Male', 'Female', 'Age', 'Height', 'Weight', 'Eye color', 'Occupation'.")

let foundTrait = people.filter(function(el){
   if(el.gender === userInput){
     return true;
    }
    else if(el.eyeColor === userInput){
      return true;
    }
    else if(el.occupation === userInput){
      return true;
    }
    else if(el.weight === userInput){
      return true
    }
    else if(el.height === userInput){
      return true;
    }
    else{
      return false;
    }

 });

return foundTrait;
}
//let genderTrait = 
//let weightTrait = people.filter(function(person){
  // if(person.id === idVariable){
     //return true; 
//let heightTrait = people.filter(function(person){
 //  if(person.id === idVariable){
    // return true;

//})
//let occupationTrait = people.filter(function(person){
  // if(person.id === idVariable){
    // return true;

//})){
  // if(person.id === idVariable){
    // return true;

//})

  //return true;

 //let foundId = 
//console.log(filterTrait);
