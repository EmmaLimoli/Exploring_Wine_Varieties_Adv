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

// prints in the dropdown, but not right data
// keep it in the list and try from there
// print the html outside of the function, 
// convert into the keys and into a list of the values
// create new function to print table
function init() {
    d3.csv("data/cheese_pract.csv").then(function(data, err) {
        console.log(data[1]);
        // create a loop to go through the cheese data
        data.forEach(function(cheesedata) {
        console.log(cheesedata);
        // print in the table in the html
        // var row = tbody.append("tr");
        // pick out the key and the value for the array
        // to print into the table need object entries
        // Object.entries(cheesedata).forEach(function([key, value]) {
        // print the key and the value
        console.log(cheesedata);
        // print in the table in the html
        // var cell = row.append("td")
        // printing the values of the object on the html
        // cell.text(cheesedata);
        // printing in the dropdown
        // value is what is pulling into the dropdown.
        var options = [cheesedata];
            
        // create for loop and function to print in the dropdown
        options.forEach(function(d,i) {
            console.log(d)
            // seldataset is where data is printing on html
            d3.select("#selDataset")
            // adding to the array
            .append("option")
            .append("select")
            .on("change", function (d) {
                var value = d3.select(this).property("value");
                alert(value)
            })

            .selectAll("option")
            // printing in dropdown
            .data(data.keys())
            .enter()
                .append("option")
                // printing in dropdown
                .attr("value", function (cheesedata) { return d.Cheese; })
                // printing in the dropdown
                .text(function (cheesedata) { return d.Cheese; })
                .property("value");
        })
    })
    })

};

init();


// d3.csv("data/cheese_pract.csv").then(function(data, err) {
//     console.log(data)

//     var map = d3.map();
//     data.forEach(function(d) {
//         if (!map.has(d.Cheese)) {
//             map.set(d.Cheese) 
//         } else {
//             map.get(d.Cheese);
//         }

//         d3.select("body").append("select")
//           .selectAll("option")
//           .data(map.keys())
//           .enter()
//           .append("option")
//           .attr("value", function (d) { return d.Cheese; })
//           // printing in the dropdown
//           .text(function (cheesedata) { return d.Cheese; })

//         })

//         // d3.select("select")
//         //   .on("change", function(d) {
//         //       var
//         //   })
// });

