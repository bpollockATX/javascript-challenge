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
var button = d3.select("#filter-btn")

form.on("submit", runEnter)       
button.on("click", runEnter)

// Create table/filter date function
function runEnter(){
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");//(".form-control");
    var inputValue = inputElement.property("value");
    var filterDate = tableData.filter(row => row.datetime === inputValue);
    
    tbody.html("")

    filterDate.forEach(function(findSighting){
        var row = tbody.append("tr");
            Object.values(findSighting).forEach(function(value){
            row.append("td").text(value);
        });
    });
};

// Create event listeners for changes in form fields
d3.select("#state").on("change", changes)
d3.select("#city").on("change", changes)
d3.select("#shape").on("change", changes)

// Create function that handles changes in any of the form fields
function changes(){
    d3.event.preventDefault();
    let inputElement = d3.select(this);
    let inputValue = inputElement.property("value").toLowerCase();
    let filter = tableData.filter(row => row[inputElement.property("id")] === inputValue);


// reset/rebuild html with filter results
    tbody.html("")

    filter.forEach(function(findSighting){
        var row = tbody.append("tr");
            Object.values(findSighting).forEach(function(value){
            row.append("td").text(value);
        });
    });
};



    // console.log(filterDate)
    // console.log(tableData.filter(x => tableData.datetime === inputValue));
    // console.log(tableData.datetime)
    // console.log(filterDate);
    // console.log(inputValue);
    // console.log(tableData);
       // console.log(inputValue);


// Create function to filter by date

// var filterDate = tableData.filter(function(limitData){
//     return tableData.datetime > inputValue;
//     console.log(filterDate);
// });




