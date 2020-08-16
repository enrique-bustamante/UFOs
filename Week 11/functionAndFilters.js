var someArray = [0,1,2,3,4,5,6,7,8,9]

function mean(array){
    var summator = 0;

    for (var i = 0; i < array.length; i++){
        summator = summator + array[i];
    }

    return (summator / array.length);
}

console.log(mean(someArray))

hello = () => console.log("Hello")
hello()

//var mean2 = (array) => {var summator = 0;for (var i=0; i < array.length; i++)}{summator = summator + array[1];} return (summator / array.length);

const simpsons = [
    {name: "Homer",
    age: 39},
    {name: "Marge", 
    age: 40},
    {name: "Bart",
    age: 10},
    {name: "Lisa", 
    age: 8},
    {name: "Maggie", 
    age: 1}
]

function selectKids(person){
    
    return person.age < 18;
}

let kidSimpsons = simpsons.filter(selectKids)
console.log(kidSimpsons)

function selectKids2(person){
    !
}