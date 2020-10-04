// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Event handler for button click
button.on("click", runEnter);
//Update input on hitting Enter
d3.select("form").on("submit", runEnter);

// Select table
var tbody = d3.select("tbody");

// Step 1: Loop Through `data` and console.log each weather report object
function runEnter() {

  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  //log input date
  console.log(inputValue);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  if (filteredData.length==0) {
    tbody.html("");
    tbody.append("tr").text(`No sightings on ${inputValue} `);
    return;
  }
  
  console.log(filteredData);

// Clear input from previous form submission
tbody.html("");
//loop through table and append rows wih data
filteredData.forEach(function(filteredData) {
  //console.log(filteredData);
  var row = tbody.append("tr");
  Object.entries(filteredData).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});
};



