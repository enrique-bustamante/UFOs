let text1 = d3.select(".text1").text();
console.log(text1);

let text2 = d3.select("#text2").text();
console.log(text2)

let someNestedATag = d3.select('#webPage>a');
console.log(someNestedATag);

let outButton = d3.select("#someButton");

function itWasClicked(){
    console.log("#someButton was clicked");
}
someButton.on("click", itWasClicked);