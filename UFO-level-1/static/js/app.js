// from data.js
var tableData = data;


// Get a Reference to the table body
var tbody = d3.select("tbody");

// Use arrow function to append data.js to table body
tableData.forEach((ufoListens) => {
    var row = tbody.append("tr");
    Object.entries(ufoListens).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

//Select Button
var button = d3.select("#filter-btn");

//Select Form
var form = d3.select("#filterform");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var searchDate = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = searchDate.property("value");

 // Filter the original table data
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
  // Create if statement to place filtered data into table
    if(filteredData.length !== 0) {
        
        // clear out table data
        tbody.html("");
        // Reuse arrow function to append filtered data into table
        filteredData.forEach((ufoListensFiltered) => {
            var row = tbody.append("tr");
            Object.entries(ufoListensFiltered).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        })}
    else {
            // clear out table data
    		tbody.html("");
            
    		// append in statement that no data is available
    		tbody.append("tr").append("td").text("no sightings on this date");
    	    }
        }