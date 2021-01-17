function productSubmit(){
    // take the length of the tr
    var allRowsLength = document.getElementsByTagName("tr").length;

    //take the value of the inputs
    var productText = document.getElementById("products").value;
    var dateText = document.getElementById("dates").value;
    var amountText = document.getElementById("amounts").value;

    //transform value into text
    var finalProductText = document.createTextNode(productText);
    var finalDateText = document.createTextNode(dateText);
    var finalAmountText = document.createTextNode("€" + amountText);

    //create delete button and give class name
    var deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.innerText = "X"

    // create a var for the table
    var table = document.getElementById("table");

    // create the new row
    var newRow = table.insertRow (1);
    newRow.id = "newRow";
    newRow.className ="newRows";

    // create the table datas
    var productCell = newRow.insertCell(0);
    var dateCell = newRow.insertCell(1);
    var amountCell = newRow.insertCell(2);

    //create delete table data and give id
    var deleteCell = newRow.insertCell(3)
    deleteCell.className = "deleteCell"

    //print the table data
    productCell.appendChild(finalProductText);
    dateCell.appendChild(finalDateText);
    amountCell.appendChild (finalAmountText);
    deleteCell.appendChild(deleteButton);

    //if you dont enter anything in the input
    if(productText == "" ||  dateText == "" || amountText == ""){
        document.getElementById("newRow").remove();
        alert("Invalid syntax, please comply in every inputs.");
    }
    //function for delete button
    deleteButton.onclick = function deleteRow(){
        document.getElementById("newRow").remove();
        if (allRowsLength <=2){
            document.getElementById("deleteAfter").style.visibility = "visible"; 
        }
    }   

    //check the length and display or hide visibility
    if(allRowsLength >= 2){
        document.getElementById("deleteAfter").style.visibility = "hidden";
    }

};

//delete all rows
function deleteAllRows(){
    var newRowClass = document.querySelectorAll(".newRows");
    var confirmation = confirm ("Delete All Items?")
    if (confirmation == true){
        for (var i = 0; i < newRowClass.length; i++){
            newRowClass[i].remove();
        }
        document.getElementById("deleteAfter").style.visibility = "visible";
    }
}
