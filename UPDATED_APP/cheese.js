// use csv to pull in cheese data
// create filter to pull out specific cheeses
// create tbody variable of where to put the data
var tbody = d3.select("tbody")

// create a filepath to data.csv using d3.csv use a then function
// function cheeseD(variety) {
//     d3.csv("data/cheese_pract.csv").then(function(data, err) {
//         console.log(data);
//         // create a loop to go through the cheese data
//         data.forEach(function(cheesedata) {
//         console.log(cheesedata);
//         // print in the table in the html
//         var row = tbody.append("tr");
//         // pick out the key and the value for the array
//         Object.entries(cheesedata).forEach(function([key, value]) {
//         // print the key and the value
//         console.log(key, value);
//         // print in the table in the html
//         var cell = row.append("td")
//         // printing the values of the object on the html
//         cell.text(value);
//         // creating dropdown
//         // created never ending loop. How to fix?
//         // var dropdown = d3.select("#selDataset");
//         //     var cheeseVariety = [...new Set(data.map(function(p){ return p.variety}))]; 
//         //     cheeseVariety.forEach(function(cheeseName) {
//         //         dropdown.append("option").text(cheeseName).property("value")
//         //     });
//         //     cheeseD(data[0].variety);
//         // })
//     });
// });

// cheeseD();

d3.csv("data/cheese_pract.csv").then(function(data, err) {
    console.log(data);
    // create a loop to go through the cheese data
    data.forEach(function(cheesedata) {
    console.log(cheesedata);
    // print in the table in the html
    var row = tbody.append("tr");
    // pick out the key and the value for the array
    Object.entries(cheesedata).forEach(function([key, value]) {
    // print the key and the value
    console.log(value);
    // print in the table in the html
    var cell = row.append("td")
    // printing the values of the object on the html
    cell.text(value);
    // printing in the dropdown
    // value is what is pulling into the dropdown.
    var options = [value];
    // create for loop and function to print in the dropdown
    options.forEach(function(d,i) {
        // seldataset is where data is printing on html
        d3.select("#selDataset")
        // adding to the array
        .append("option")
        // attribute
        .attr("value", i)
        // print text of function
        .text(d)
    })

    // tbody 
    //     .on("change", function(d) {
    //         var value = d3.tbody(this).property("value");
    //         alert(value)
    //     });
    // tbody.selectAll("option")
    //     .data(data)
    //     .enter()
    //     .append("option")
    //     .attr("value", function(d) { return d.value; })
    //     .text(function (d) { return d.label; });
    })
    })
});
