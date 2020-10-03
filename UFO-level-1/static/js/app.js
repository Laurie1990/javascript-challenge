// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
// Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(tableData) {
  console.log(tableData);
});
// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");
});

// // Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");

  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
  });
});