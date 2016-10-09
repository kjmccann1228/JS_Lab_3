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
    str += pb.phoneBook[i].name + ":" + "<br />";
    for(var j=0 ; j < pb.phoneBook[i].number.length ; j++)
    {
      console.log(pb.phoneBook[i].number[j]);
      str += (j+1) + ": " + pb.phoneBook[i].number[j] + "<br />";
    }
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

function Contact(name, num)
{
  this.name = name;
  this.number = [];
  this.number.push(num);
  /*this.numberList = new NumberList();
  this.numberList.push(num);*/
}

/*{
  this.numberList=[];
}*/

function showAdd() {

  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  pb.phoneBook.push(new Contact(name, number));
  console.log(pb.phoneBook[counter].name + " " + pb.phoneBook[counter].number);
  counter++;
};

function showAddNumber() {
  var name = prompt("Enter name to add additional number");
  var number =prompt("Enter additional number");
  for(var i=0 ; i < pb.phoneBook.length ; i++)
  {
    if(pb.phoneBook[i].name == name)
    {
      pb.phoneBook[i].number.push(number);
    }
  }
}

function showRemove()
{
  var remove = prompt("Enter name to remove");
  for(var i = 0 ; i < pb.phoneBook.length ; i++)
  {
    if(pb.phoneBook[i].name == remove)
    {
      pb.phoneBook.splice(i,1);
    }
  }
}

function showRemoveNumber()
{
  var remove = prompt("Enter name to remove number");
  var removeDisplay = "Note number corresponding to entry you'd like to remove <br />";
  var removeNameIndex;
  for(var i=0 ; i <pb.phoneBook.length ; i++)
  {
    if(pb.phoneBook[i].name == remove)
    {
      removeNameIndex = i;
      for(var j=0 ; j<pb.phoneBook[i].number.length ; j++)
      {
        removeDisplay += (j+1) + ": " + pb.phoneBook[i].number[j] + "<br />";
      }
    }
  }
  var removeNum = prompt("Which entry would you like to remove?");
  pb.phoneBook[removeNameIndex].number.splice(removeNum-1, 1);
}


function showLookup() {
  var lookup = prompt("Enter name to lookup");
  var num = "";
  for(var i = 0 ; i < pb.phoneBook.length ; i++)
  {
    if(pb.phoneBook[i].name == lookup)
    {
      for(var j = 0 ; j < pb.phoneBook[i].number.length ; j++)
      {
        num += pb.phoneBook[i].number[j];
      }
    }
  }
  display.innerHTML = num;
};

function showReverseLookup()
{
  var lookup = prompt("Enter number to lookup");
  var name = "";
  for(var i = 0; i < pb.phoneBook.length ; i++)
  {
    for(var j=0; j < pb.phoneBook.length ; j++)
    {
      if(pb.phoneBook[i].number[j]== lookup)
      {
        name += pb.phoneBook[i].name;
      }
    }
  }
  display.innerHTML = name;
}

var display = document.getElementById("display");
