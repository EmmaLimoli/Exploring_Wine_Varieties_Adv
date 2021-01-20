// use csv to pull in cheese data
// create filter to pull out specific cheeses

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










