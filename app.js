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
 if(!person || person[0] == undefined){
   alert("Could not find that individual.");
   return app(people); // restart

 }


if (person.length <= 1) {
 let displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " Select from the options below:  'Gender', 'DOB, 'Height', 'Weight', 'Eyecolor', 'Occupation', 'Parents', 'Current Spouse', 'Family', 'Descendants', 'Info' (display all), or 'restart' or 'quit'").toLowerCase();
    

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
    case "descendants": showDescendants(person, people);
    break;
    case "family": alert(showFamily(person, people));
    break;
    case undefined: console.log("Item cannot be found");
    break;
   case "restart":
   app(people); // restart
   break;
   case "quit":
   return; // stop execution
   default: console.log("Item cannot be found");

   return app(people); // ask again
 
    }
    mainMenu(person, people);


  }
  else {
    displayPeople(person);
      }


      if (person[0].parents.length == 0) 
    {
      person[0].parents = "Does not have parents";
    }

  if (person[0].currentSpouse == null) 
    {
      person[0].currentSpouse = "Does not have a spouse";
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
 });

}

function displayPerson(person){
 // print all of the information about a person:
 // height, weight, age, name, occupation, eye color.
 let personInfo = "First Name: " + person.firstName + "\n";
 personInfo += "Last Name: " + person.lastName + "\n";
 // TODO: finish getting the rest of the information to display
 alert(personInfo);
}

function displayPeople(people){
 alert(people.map(function(person){
   return person.firstName + " " + person.lastName;
 }).join("\n"));
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
 let userInput = prompt("Do you want to search by individual traits? Type in a trait. 'Male', 'Female', 'Height', 'Weight', 'Eye color', 'Occupation'.")

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
    else if(el.weight <= userInput && el.weight >= (userInput-50)|| (el.weight <= userInput+50 && el.weight >= userInput)){
      return true;
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


function showFamily(person, people){


let userInput = person[0].id; //searched persons name


let foundKids = people.filter(function(el){
   if(el.parents[0] === person[0].id){
     return true;
    }
    else if(el.parents[1] === person[0].id){
      return true;
    }
    else {
      return false;
    }
  });

let foundSpouse = person[0].currentSpouse; //the searched persons spouse

let spouseName = people.filter(function(el){         //matches id with the spouse

if(el.id === parseInt(foundSpouse)) {
  return true;
  }
  else {
  return false;
}
});

if (foundSpouse !== "Does not have a spouse") 
{
  for (let i = 0; i < foundKids.length; i++){
  console.log("Spouse:" + spouseName[0].firstName+ " "  + " " + "Kids:" + foundKids[i].firstName + " " + foundKids[i].lastName)
  }
}

else if (foundSpouse == "Does not have a spouse")
 {
     let displayKids =  "";

  for (let i = 0; i < foundKids.length; i++)
    {
    displayKids += " " + foundKids[i].firstName;
    }
    alert("Spouse: " + foundSpouse + " " + "Kids: " + displayKids);

  }

}

function showDescendants(person, people,counter)  //x, length of array is 0
{
      let descendantsArray;
    
if (counter === undefined){
      descendantsArray = people.filter(function(el) {
        if (person[0].id == el.parents[0]) {
          return true;
        }

        else if(person[0].id == el.parents[1]) {
          return true;
        }

        else {
          return false;
        }


      });
        counter = 0;
          for (let i = 0; i< descendantsArray.length; i++) 
      {
          alert(descendantsArray[i].firstName);

      }

    }

    else if (counter >= 0 && counter <= person.length-1) 
      { descendantsArray = person;

        let grandDescendantsArray = people.filter(function(el) {
         if (person[counter].id === el.parents[0]) {
          return true;
         }

         else if (person[counter].id === el.parents[1]) {
          return true;
         }

        else {
          return false;
        }

      });

    for (let i = 0; i< grandDescendantsArray.length; i++) 
      {
          alert(grandDescendantsArray[i].firstName); //print grandchildren


      }
        counter++;

  }

  else return; 

          return showDescendants(descendantsArray, people, counter)

}

// function showFamily(person, people){


// let hasParents = people.filter(function(el) 
// {
//   if(el.parents.length>0) 
//   {
//     return true;
//   }
//   else {
//     return false;
//   }
// });

// let parentArray;
// for (let i = 0; i< hasParents.length; i++) {
// if (hasParents[i].parents.findIndex(0) === person.id)
// {
// parentArray = hasParents[i].parents.findIndex(0);

// }

// }
// return parentArray;

// let foundKids = hasParents.filter(function(el){
//    if(person.id === hasParents.parents.indexOf(0)){
//      return true;
//    }
//    else if (person.id === hasParents.parents.indexOf(0)){
//      return true;
//    }
//    else {return false;}


 // });



// function showDescendants(person, people) 
// { 
     
//     people.length - 1

//     //1. analyze object
//     //2.  console
//     //3. delete that object
//           let parentSelect = ""; //Julie, Brad
//               for (let i = 0; i <= 2; i++ ) 
//       {

//           people.parents[i] = parentSelect;

//          if (parentSelect == person.id) 

//          {
//             console.log("Child:" + people[x] );

//          }
//        }
//            return showDescendants();
// }
// function showFamily() 
// {

//       return showFamily();
// }




