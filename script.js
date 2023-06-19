var selectedDay = document.getElementById("day");
var inputText = document.querySelector(".inputText");
var sendBtn = document.querySelector(".sendBtn");
var options = selectedDay.options;

//content areas
var toDoList = document.querySelector(".toDoList");
var sunday = document.querySelector(".sunday");
var monday = document.querySelector(".monday");
var tuesday = document.querySelector(".tuesday");
var wednesday = document.querySelector(".wednesday");
var thursday = document.querySelector(".thursday");
var friday = document.querySelector(".friday");
var saturday = document.querySelector(".saturday");

//initial input array
var inputArray = [[], [], [], [], [], [], [], []];

//gets save data from local storage and parses into array
var savedString = localStorage.getItem("item-array");
var savedArray = JSON.parse(savedString);

//if there is save data, inputArray will include it
if (savedArray != null) {
  inputArray = savedArray;
}

//prints input text to page based on user input and saves in local storage
sendBtn.addEventListener("click", function (event) {
  event.preventDefault();

  //creates new elements to display user input
  var listItem = document.createElement("li");
  var itemDelete = document.createElement("button");
  var lineBreak = document.createElement("br");

  //vars with user input
  var selectedIndex = selectedDay.selectedIndex;
  var selectedValue = options[selectedIndex].value;
  var input = inputText.value;

  //styling for content being created
 listItem.textContent = input;
  listItem.style.display = "inline";
  listItem.style.margin = "0 5px 0 0";
  
  itemDelete.style.backgroundSize = "contain";
  itemDelete.style.borderStyle = "none";
  itemDelete.style.backgroundColor = "none";
  itemDelete.style.width = "18px";
  itemDelete.style.height = "18px";
  itemDelete.style.display = "inline";
  itemDelete.style.backgroundImage = "url('https://raw.githubusercontent.com/Val-gee/weekly-task-manager/main/Assets/images/x-button.png')";
  
  
  
  

  //appends new elements in appropriate area of page
  //if (selectedValue == "") {
  //  return;
  //}
   
   if (selectedValue === "toDo") {
    toDoList.appendChild(listItem);
    toDoList.appendChild(itemDelete);
    toDoList.appendChild(lineBreak);
    inputArray[0].push(input);

    //this var is used to create an id for the new elements created
    var idNumber = "0-" + (inputArray[0].length - 1);

    var dayIndex = inputArray.findIndex((number) => (number = 0));
  } else if (selectedValue === "sunday") {
    sunday.appendChild(listItem);
    sunday.appendChild(itemDelete);
    sunday.appendChild(lineBreak);
    inputArray[1].push(input);

    var idNumber = "1-" + (inputArray[1].length - 1);
  } else if (selectedValue === "monday") {
    monday.appendChild(listItem);
    monday.appendChild(itemDelete);
    monday.appendChild(lineBreak);
    inputArray[2].push(input);

    var idNumber = "2-" + (inputArray[2].length - 1);
  } else if (selectedValue === "tuesday") {
    tuesday.appendChild(listItem);
    tuesday.appendChild(itemDelete);
    tuesday.appendChild(lineBreak);
    inputArray[3].push(input);

    var idNumber = "3-" + (inputArray[3].length - 1);
  } else if (selectedValue === "wednesday") {
    wednesday.appendChild(listItem);
    wednesday.appendChild(itemDelete);
    wednesday.appendChild(lineBreak);
    inputArray[4].push(input);

    var idNumber = "4-" + (inputArray[4].length - 1);
  } else if (selectedValue === "thursday") {
    thursday.appendChild(listItem);
    thursday.appendChild(itemDelete);
    thursday.appendChild(lineBreak);
    inputArray[5].push(input);

    var idNumber = "5-" + (inputArray[5].length - 1);
  } else if (selectedValue === "friday") {
    friday.appendChild(listItem);
    friday.appendChild(itemDelete);
    friday.appendChild(lineBreak);
    inputArray[6].push(input);

    var idNumber = "6-" + (inputArray[6].length - 1);
  } else {
    saturday.appendChild(listItem);
    saturday.appendChild(itemDelete);
    saturday.appendChild(lineBreak);
    inputArray[7].push(input);

    var idNumber = "7-" + (inputArray[7].length - 1);
  }

  //sets identical class and id for list item and delete button
  listItem.setAttribute("class", idNumber);
  itemDelete.setAttribute("id", idNumber);

  //converts newly-modified inputArray to JSON and saves in local storage
  var inputArrayFormatted = JSON.stringify(inputArray);
  localStorage.setItem("item-array", inputArrayFormatted);

  //deletes to-do task from page, updates local storage, and adjusts ids and classes for created items
  function deleteItem() {
    var itemDeleteId = this.id;
    listItem.remove();
    itemDelete.remove();
    lineBreak.remove();

    for (var x = 0; x < inputArray.length; x++) {
      for (var i = 0; i < inputArray[x].length; i++) {
        var idNumber = x + "-" + i;
        console.log(idNumber);
        console.log(itemDeleteId);
        if (itemDeleteId == idNumber) {
          inputArray[x].splice(i, 1);

          //selects all list items and delete buttons in a given section
          var toDoItems = toDoList.children;
          var sundayItems = sunday.children;
          var mondayItems = monday.children;
          var tuesdayItems = tuesday.children;
          var wednesdayItems = wednesday.children;
          var thursdayItems = thursday.children;
          var fridayItems = friday.children;
          var saturdayItems = saturday.children;

          //if statement that changes ids and classes of affected list items to match the current array after item removal
          if (x === 0) {
            for (var b = 0; b < toDoItems.length; b += 3) {
              var thisList = toDoItems[b];
              var thisX = toDoItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          } else if (x === 1) {
            for (var b = 0; b < sundayItems.length; b += 3) {
              var thisList = sundayItems[b];
              var thisX = sundayItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          } else if (x === 2) {
            for (var b = 0; b < mondayItems.length; b += 3) {
              var t = 0;
              var thisList = mondayItems[b];
              var thisX = mondayItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          } else if (x === 3) {
            for (var b = 0; b < tuesdayItems.length; b += 3) {
              var t = 0;
              var thisList = tuesdayItems[b];
              var thisX = tuesdayItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          } else if (x === 4) {
            for (var b = 0; b < wednesdayItems.length; b += 3) {
              var t = 0;
              var thisList = wednesdayItems[b];
              var thisX = wednesdayItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          } else if (x === 5) {
            for (var b = 0; b < thursdayItems.length; b += 3) {
              var t = 0;
              var thisList = thursdayItems[b];
              var thisX = thursdayItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          } else if (x === 6) {
            for (var b = 0; b < fridayItems.length; b += 3) {
              var t = 0;
              var thisList = fridayItems[b];
              var thisX = fridayItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          } else {
            for (var b = 0; b < saturdayItems.length; b += 3) {
              var thisList = saturdayItems[b];
              var thisX = saturdayItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          }
        }
      }
    }
    inputArrayFormatted = JSON.stringify(inputArray);
    localStorage.setItem("item-array", inputArrayFormatted);
  }

  itemDelete.addEventListener("click", deleteItem);
});

//prints saved data to page on load
function printLocalStorage() {}

function printLocalStorage() {
  //nested for loop to scan 2D array
  for (var x = 0; x < inputArray.length; x++) {
    for (var i = 0; i < inputArray[x].length; i++) {
      //current item being scanned in for loop
      var selectedItem = inputArray[x][i];

      //creates elements to display user input and adds classes to identify based on position in array
      var listItem = document.createElement("li");
      listItem.setAttribute("class", x + "-" + i);

      var itemDelete = document.createElement("button");
      itemDelete.setAttribute("class", "delete-buttons");
      itemDelete.setAttribute("id", x + "-" + i);

      var lineBreak = document.createElement("br");

      //styles new elements
      listItem.style.display = "inline";
      listItem.style.margin = "0 5px 0 0";
      itemDelete.style.backgroundImage = "url('https://raw.githubusercontent.com/Val-gee/weekly-task-manager/main/Assets/images/x-button.png')";
      itemDelete.style.backgroundSize = "contain";
      itemDelete.style.borderStyle = "none";
      itemDelete.style.backgroundColor = "none";
      itemDelete.style.width = "18px";
      itemDelete.style.height = "18px";
      listItem.textContent = selectedItem;

      //if statement to ensure saved items display to correct area of application
      if (x === 0) {
        toDoList.appendChild(listItem);
        toDoList.appendChild(itemDelete);
        toDoList.appendChild(lineBreak);
      }
      if (x === 1) {
        sunday.appendChild(listItem);
        sunday.appendChild(itemDelete);
        sunday.appendChild(lineBreak);
      }
      if (x === 2) {
        monday.appendChild(listItem);
        monday.appendChild(itemDelete);
        monday.appendChild(lineBreak);
      }
      if (x === 3) {
        tuesday.appendChild(listItem);
        tuesday.appendChild(itemDelete);
        tuesday.appendChild(lineBreak);
      }
      if (x === 4) {
        wednesday.appendChild(listItem);
        wednesday.appendChild(itemDelete);
        wednesday.appendChild(lineBreak);
      }
      if (x === 5) {
        thursday.appendChild(listItem);
        thursday.appendChild(itemDelete);
        thursday.appendChild(lineBreak);
      }
      if (x === 6) {
        friday.appendChild(listItem);
        friday.appendChild(itemDelete);
        friday.appendChild(lineBreak);
      }
      if (x === 7) {
        saturday.appendChild(listItem);
        saturday.appendChild(itemDelete);
        saturday.appendChild(lineBreak);
      }
    }
  }

  //selects all delete buttons
  var deleteButtons = document.querySelectorAll(".delete-buttons");

  //adds click functionality to delete button
  for (var z = 0; z < deleteButtons.length; z++) {
    deleteButtons[z].addEventListener("click", deleteItem);
  }
}

//deletes clicked to-do and updates local storage
function deleteItem() {
  //uses this to locate elements to be deleted and deletes them
  var thisDelete = this;
  var thisListItem = this.previousElementSibling;
  var thisBreak = this.nextElementSibling;
  var itemDeleteId = this.id;
  thisDelete.remove();
  thisListItem.remove();
  thisBreak.remove();

  for (var x = 0; x < inputArray.length; x++) {
    for (var i = 0; i < inputArray[x].length; i++) {
      if (inputArray[x][i]) {
        var idNumber = x + "-" + i;
        console.log(idNumber);
        console.log(itemDeleteId);
        if (itemDeleteId == idNumber) {
          inputArray[x].splice(i, 1);

          var toDoItems = toDoList.children;
          var sundayItems = sunday.children;
          var mondayItems = monday.children;
          var tuesdayItems = tuesday.children;
          var wednesdayItems = wednesday.children;
          var thursdayItems = thursday.children;
          var fridayItems = friday.children;
          var saturdayItems = saturday.children;

          if (x === 0) {
            for (var b = 0; b < toDoItems.length; b += 3) {
              var thisList = toDoItems[b];
              var thisX = toDoItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          } else if (x === 1) {
            for (var b = 0; b < sundayItems.length; b += 3) {
              var thisList = sundayItems[b];
              var thisX = sundayItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          } else if (x === 2) {
            for (var b = 0; b < mondayItems.length; b += 3) {
              var thisList = mondayItems[b];
              var thisX = mondayItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          } else if (x === 3) {
            for (var b = 0; b < tuesdayItems.length; b += 3) {
              var thisList = tuesdayItems[b];
              var thisX = tuesdayItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          } else if (x === 4) {
            for (var b = 0; b < wednesdayItems.length; b += 3) {
              var thisList = wednesdayItems[b];
              var thisX = wednesdayItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          } else if (x === 5) {
            for (var b = 0; b < thursdayItems.length; b += 3) {
              var thisList = thursdayItems[b];
              var thisX = thursdayItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          } else if (x === 6) {
            for (var b = 0; b < fridayItems.length; b += 3) {
              var thisList = fridayItems[b];
              var thisX = fridayItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
              console.log(thisList.className);
              console.log(thisX.id);
            }
          } else {
            for (var b = 0; b < saturdayItems.length; b += 3) {
              var thisList = saturdayItems[b];
              var thisX = saturdayItems[b].nextElementSibling;
              thisList.removeAttribute("class");
              thisList.setAttribute("class", x + "-" + b / 3);
              thisX.removeAttribute("id");
              thisX.setAttribute("id", x + "-" + b / 3);
            }
          }
        }
      }
    }
  }

  //saves updated data in local storage
  var inputArrayFormatted = JSON.stringify(inputArray);
  localStorage.setItem("item-array", inputArrayFormatted);
}

printLocalStorage();