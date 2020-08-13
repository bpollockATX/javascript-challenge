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

