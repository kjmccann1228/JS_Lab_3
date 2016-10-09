" use strict ";
var display = document.getElementById("display");

var pb = new PhoneBook();
var counter = 0;
function PhoneBook()
{
  this.count = 0;
  this.phoneBook = [];

};

function listAllNumbers() {
  // code to list all numbers
  var str = "";
  for(var i=0 ; i < pb.phoneBook.length ; i++)
  {
    str += pb.phoneBook[i].name + " : " + pb.phoneBook[i].number + "<br />";
  }
  display.innerHTML = str;
};

function listAllNames() {
  // code to list all names
  var str = "";
  for(var i=0 ; i < pb.phoneBook.length ; i++)
  {
    str += pb.phoneBook[i].name + "<br />";
  }
  display.innerHTML = str;
};

function Contact(name, number)
{
  this.name = name;
  this.number = number;
}

function showAdd() {

  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  pb.phoneBook.push(new Contact(name, number));
  console.log(pb.phoneBook[counter].name + " " + pb.phoneBook[counter].number);
  counter++;
};

function showRemove() {
  var remove = prompt("Enter name to remove");
  for(var i = 0 ; i < pb.phoneBook.length ; i++)
  {
    if(pb.phoneBook[i].name == remove)
    {
      pb.phoneBook.splice(i,1);
    }
  }

};

function showLookup() {
  var lookup = prompt("Enter name to lookup");
  var num = "";
  for(var i = 0 ; i < pb.phoneBook.length ; i++)
  {
    if(pb.phoneBook[i].name == lookup)
    {
      num += pb.phoneBook[i].number;
    }
  }
  display.innerHTML = num;
};

var display = document.getElementById("display");
