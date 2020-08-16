// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
var filters = {};
var filteredData = tableData
// This function will replace your handleClick function
function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  var dateValue = d3.select("#datetime").property("value");
  var cityValue = d3.select("#city").property("value");
  var stateValue = d3.select("#state").property("value");
  var countryValue = d3.select("#country").property("value");
  var shapeValue = d3.select("#shape").property("value");
  var date = {dictId: "datetime", inputValue: dateValue};
  var city = {dictId: "city", inputValue: cityValue};
  var state = {dictId: "state", inputValue: stateValue};
  var country = {dictId: "country", inputValue: countryValue};
  var shape = {dictId: "shape", inputValue: shapeValue};



  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (dateValue) {
    filters['date'] = date;
  } 
  
  if (cityValue) {
    filters['city'] = city;
  } 
  
  if (stateValue) {
    filters['state'] = state;
  } 
  
  if (countryValue) {
    filters['country'] = country;
  }
  
  if (shapeValue) {
    filters['shape'] = shape;
  } 

console.log(filters)
  // Call function to apply all filters and rebuild the table
  filterTable(filters);
}

  function filterTable(someArray) {
//
//  // Set the filteredData to the tableData
    let filteredData = tableData;
//  // Loop through all of the filters and keep any data that
//  // matches the filter values
    for (var index in filters) { 
      var item = filters[index]
      var filterValue = item['inputValue'];
      var Id = item['dictId'];
      filteredData = filteredData.filter(rows => rows[Id] === filterValue);

//    // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
    } 
  }
function clearClick() {
    buildTable(tableData);
    filters = {};
    console.log(filters);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", updateFilters);
d3.selectAll("#clear-btn").on("click", clearClick);
d3.selectAll("#datetime").on("change", updateFilters);
d3.selectAll("#city").on("change", updateFilters);
d3.selectAll("#state").on("change", updateFilters);
d3.selectAll("#country").on("change", updateFilters);
d3.selectAll("#shape").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);