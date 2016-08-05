var todo = [];
var index = 0;

function displayThingsTodo(){
  index = 0;
  var list = document.createElement("ul");
  document.getElementById("displayList").innerText = "";

  for(var i = 0; i < todo.length; i++){
    var listItem = document.createElement("li");
    listItem.innerText = todo[i];

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onclick = removeItem;
    checkBox.id = index;

    listItem.appendChild(checkBox);

    list.appendChild(listItem);
    document.getElementById("displayList").appendChild(listItem);
    index++;
  }
}

function removeItem(){
  var checkedIndex = this.id;
  todo.splice(checkedIndex,1)
  displayThingsTodo();
}

function addListItem(){
  var input = document.getElementById("userInput").value;

  if(input == ""){
    return;
  }

  todo.push(input);
  displayThingsTodo();
}
