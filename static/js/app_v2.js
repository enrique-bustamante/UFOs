// import the data from data.js
const tableData = data;

// Reference the html table using d3
var tbody = d3.select("tbody");

// Create function to read data
function buildTable(data) {
    // First clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
        );
    });
}

// Create button that detects the click
function handleClick() {
    // Grab the datetime value from the filter
    let inputValue = d3.select("#inputBox").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the
    // data using that date.
    if (document.getElementById('filterType').value === 'Date') {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === inputValue);
    } else if (document.getElementById('filterType').value == 'City') {
        // Apply 'filter' to the table data to only keep the 
        //rows where the 'city' value matches the filter value
        filteredData = filteredData.filter(row => row.city === inputValue);
    } else if (document.getElementById('filterType').value == 'State') {
        // Apply 'filter' to the table data to only keep the 
        //rows where the 'city' value matches the filter value
        filteredData = filteredData.filter(row => row.state === inputValue);
    } else if (document.getElementById('filterType').value == 'Country') {
        // Apply 'filter' to the table data to only keep the 
        //rows where the 'city' value matches the filter value
        filteredData = filteredData.filter(row => row.country === inputValue);
    } else if(document.getElementById('filterType').value == 'Shape') {
        // Apply 'filter' to the table data to only keep the 
        //rows where the 'city' value matches the filter value
        filteredData = filteredData.filter(row => row.shape === inputValue);
    }

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

// Change placeholder based on filter type
var filterType = d3.select('#filterType'),
    inputBox = d3.select('#inputBox');

filterType.on('change', function() {
    inputBox.setAttribute('placeholder','Enter data');
});
