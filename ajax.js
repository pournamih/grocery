function ajax()
{

var temp= [
    
        
        {
            "S.No" : "1",
            "Name":"Rice",
            "Quantity":"5",
            "Unit":"kg",
            "Department":"Grains"
        },
        {
         "S.No" : "2",
         "Name":"Atta",
         "Quantity":"1",
         "Unit":"kg",
         "Department":"Grocery"
        },
        {
         "S.No" : "3",
         "Name":"Green Grams",
         "Quantity":"1",
         "Unit":"kg",
         "Department":"Grains"
        },
        {
         "S.No" : "4",
         "Name":"Curry Powder",
         "Quantity":"6",
         "Unit":"Packets",
         "Department":"Curry powder"
        },
        {
         "S.No" : "5",
         "Name":"onion",
         "Quantity":"2",
         "Unit":"kg",
         "Department":"Vegetable"
        },
        {
         "S.No" : "6",
         "Name":"Tomato",
         "Quantity":"1",
         "Unit":"kg",
         "Department":"Vegetable"
        },
        {
         "S.No" : "7",
         "Name":"Oil",
         "Quantity":"1",
         "Unit":"kg",
         "Department":"Grocery"
        },
        {
         "S.No" : "8",
         "Name": "Milk",
         "Quantity":"1",
         "Unit":"L",
         "Department":"Grocery"
        },
        {
         "S.No" : "9",
         "Name":"Sugar",
         "Quantity":"2",
         "Unit":"kg",
         "Department":"Grocery"
        },
        {
         "S.No" : "10",
         "Name":"Washing powder",
         "Quantity":"1",
         "Unit":"kg",
         "Department":"Laundry"
        }
     ]

var col = [];
        for (var i = 0; i < temp.length; i++) {
            for (var key in temp[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

var table = document.createElement("table");
var tr = table.insertRow(-1);                   

for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");     
    th.innerHTML = col[i];
    tr.appendChild(th);
}

for (var i = 0; i < temp.length; i++) {

    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = temp[i][col[j]];
    }
}

var divContainer = document.getElementById("demo");
divContainer.innerHTML = "";
divContainer.appendChild(table);

}

