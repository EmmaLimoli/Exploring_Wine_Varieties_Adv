// use csv to pull in cheese data
// create filter to pull out specific cheeses

var tbody = d3.select("tbody")

// create a filepath to data.csv using d3.csv use a then function
d3.csv("data/cheese_pract.csv").then(function(data, err) {
    console.log(data);
    // create a loop to go throug hthe cheese data
    data.forEach(function(cheesedata) {
    console.log(cheesedata);
    // pick out the key and the value for the array
    Object.entries(cheesedata).forEach(function([key, value]) {
    console.log(key, value)
    })
    })
});

// filter by cheese variety, type, flavor, like ufo project
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");
    d3.event.preventDefault();
    var inputElement = d3.select("#cheeseVariety");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);
    var filterData = data.filter(cheese => cheese.variety == inputValue);
    console.log(filterData)
});










