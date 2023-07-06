
const inventors = [
    {first: "Albert", last: "Einstein", year: 1879, passed: 1953}, 
    {first: "Isaac", last: "Newton", year: 1643, passed: 1727}, 
    {first: "Galileo", last:"Galilei", year: 1564, passed: 1642}, 
    {first: "Marie", last: "Curie", year: 1867, passed: 1934}, 
    {first: "Johannes", last: "Kepler", year: 1571, passed: 1630}, 
    {first: "Nicolaus", last: "Copernicus", year:1475, passed: 1543},
    {first: "Max", last: "Planck", year: 1858, passed: 1947}
    ]
const people = [ 
    {name: "Glenn", year: 1987}, 
    {name: "Carl", year: 1956}, 
    {name: "Beckett", year: 1856}, 
    {name: "Beddoes", year: 2009},
    {name: "Chester", year: 1458} 

  ]

// const fifteen =inventors.filter(inventor => inventor.year >= 1500 && inventor.year <1600)
    

// console.table(fifteen); 

// const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

// console.log(fullNames);

// const ordered = inventors.sort(function(a,b){
//     if(a.year > b.year) {
//         return 1;
//     } else {
//         return -1;
//     }
    
// })

const  ordered = inventors.sort((a,b) => a.year >b.year ? 1 : -1);
// console.table(ordered)

// const totalYears = inventors.reduce((total,inventor) => {
//     return total + (inventor.passed - inventor.year);
// }, 0)

// console.log(totalYears)

// const oldest = inventors.sort(function(a, b ){
//     const lastGuy = a.passed - a.year; 
//     const nextGuy = b.passed - b.year; 
//     return lastGuy > nextGuy ? -1 : 1;
// });

// console.table(oldest)

// const category = document.querySelector('.mw-category');
// const links = category.querySelectorAll('a');
// const de = links.map(links => links.textContent);

const comments = [
    {text: "I like this bottle", id: 5435555},
    {text: "text", id:34542}
]

// const isAdult = people.some(person =>
//     ((new Date()).getFullYear()) -
//     person.year >= 19); 

// const isAdult = people.every(person =>
//     ((new Date()).getFullYear()) -
//     person.year >= 19); 
// console.log({isAdult});

const comment = comments.find(comment => 
    comment.id === 34542);

// console.log(comment)

// const index = comments.findIndex(comment => comment.id ===
//     5435555);
// console.log(index)

// comments.splice(index, 1);
// const newComments = [
//     ...comments.slice(0, index), 
//     ...comments.slice(index + 1)
// ]; 
// console.table(newComments)

const fibonacci = function(number) {
    
    let limit = 100000
    const fibList = [0]
    let i = fibList.length
    


    for(i; i++; i < number ) {
        fibList[number] = fibList[number-2] + fibList[number-1];
    }
    return fibList[i]
}

fibonacci(4)