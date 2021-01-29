function getFocused(){
    document.getElementById("agenda").focus();
}



function writeToDoList(){
    //create the new Item
    var li = document.createElement("li");
    li.id = "item";
    
    //create a button inside the new item
    var button= document.createElement("button");
    button.innerHTML = "Delete";
    button.id = "outputButton";

    //take the value of the input
    var text = document.getElementById("agenda").value;

    //append the input value and button to the new item
    var finaltext = document.createTextNode(text);
    li.appendChild(finaltext);
    li.appendChild(button);

    //insert the new tags in the html and remove value of the agenda
    document.getElementById("result").appendChild(li);
    document.getElementById("agenda").value = "";

    //delete item
    button.onclick = function deleteItem(){
        document.getElementById("outputButton").remove();
        document.getElementById("item").remove();
    }

    //if you dont enter anything in the input
    if(text == ""){
        li.remove();
        alert("Invalid Syntax, please try again");
    }
}