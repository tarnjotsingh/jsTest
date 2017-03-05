$(document).ready(function(){
    $("button").click(function(){
        $("#asdf").hide();
    });
});

$(document).ready(function(){
  $("#para2").mouseup(function() {
    alert("You entered paragraph 2!");
  });
});

 /*Document ready event, ensures that jQuery code only runs after the page is
   fully loaded.
 $(document).ready(function(){
 //jquery methods go in here
});*/


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

function example() { document.getElementById("myButton").innerHTML = "I just changed!"; }
function changeTitle() { document.getElementById("header").innerHTML = "Paragraph changed."; }
function changeTitleSize() { document.getElementById("header").style.fontSize = "24px"; }
function showAlert()
{
  var tarn = new Person("Tarnjot", "Singh");
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
