// use csv to pull in cheese data
// create filter to pull out specific cheeses

// create a filepath to data.csv using d3.csv use a then function
d3.csv("../CSVS/cheese.csv").then(function(cheese) {
    console.log(cheese);
});

