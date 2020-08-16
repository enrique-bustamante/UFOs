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

// This function will replace your handleClick function
function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("values");
  let shape = d3.select("#shape").property("values");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
      filters.push(date);
  } else if (city) {
      filters.push(city);
  } else if (state) {
      filters.push(state);
  } else if (country) {
      filters.push(country);
  } else if (shape) {
      filters.push(shape);
  }
  // Call function to apply all filters and rebuild the table
  filterTable(filters);
}

function filterTable(someArray) {

  // Set the filteredData to the tableData
  let filteredData = tableData;
  // Loop through all of the filters and keep any data that
  // matches the filter values
  for (x in someArray) {
    filteredData = filteredData.filter(row => row.x === x);
  }

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll().on();

// Build the table when the page loads
buildTable(tableData);
