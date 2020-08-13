// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create table with data from data.js

var tbody = d3.select("tbody");

tableData.forEach(function(findSighting){
    var row = tbody.append("tr");
        Object.values(findSighting).forEach(function(value){
        row.append("td").text(value);
    });
});


//Grab form and button IDs for date submissions
var form = d3.select("#form")
var button = d3.select("#datetime")

form.on("submit", runEnter)       
button.on("submit", runEnter)

function runEnter(){
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");//(".form-control");
    var inputValue = inputElement.property("value");
    // console.log(inputValue);
};

// Create function to filter by date

var filterDate = tableData.filter(function(limitData){
    return tableData.datetime > inputValue;
    console.log(filterDate);
});

