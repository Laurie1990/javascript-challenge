// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select table
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// Step 1: Loop Through `data` and console.log each weather report object
function runEnter() {

  d3.event.preventDefault();

  console.log("Yeah buddy!");

  console.log(inputValue)

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
tbody.html("");
data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});
};
// Event handler for button click
button.on("click", runEnter);
//Update input on hitting Enter
d3.select("form").on("submit", runEnter);

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");
// Get the value property of the input element
var inputValue = inputElement.property("value");
