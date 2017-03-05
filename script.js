/*//Litearl notation for an object
var me =
{
  firstName: "Tarnjot",
  lastName: "Singh",
  age: 19,
  eyeColour: brown,
  getFullName: function() { return this.firstName + " " + this.lastName; }
};
*/

var tarnjot = {
  firstName: 'Tarnjot',
  lastName: 'Singh',
  interests: ['Games', 'Technology'],
  getFullName: function() { return this.firstName + " " + this.lastName; }
};

var Person = function(fName, lName)
{
  this.firstName = fName;
  this.lastName = lName;
  this.getFullName = function() { return this.firstName + " " + this.lastName; };
};

var tarn = new Person("Tarnjot", "Singh");

console.log("Successfully loaded js file!");


function example() { document.getElementById("myButton").innerHTML = "I just changed!"; }
function changeTitle() { document.getElementById("header").innerHTML = "Paragraph changed."; }
function changeTitleSize() { document.getElementById("header").style.fontSize = "24px"; }
function showAlert()
{
   console.log("is this even running?");
   //console.log(person.interests);
   window.alert(tarn.getFullName());
 }

 function showPrompt()
 {
   //simple method to take in the user's name and have it change the jumbotron text title
   var name = widow.prompt("Please enter your full name", "Jhon Doe");
   var n = "Tarnjot Singh";
   var names = n.split(' ');
   console.log(names);

 }

 /*Document ready event, ensures that jQuery code only runs after the page is
   fully loaded.
 $(document).ready(function(){
 //jquery methods go in here
});*/
