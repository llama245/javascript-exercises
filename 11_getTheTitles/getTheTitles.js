const books = [
   {
      title: 'Book',
      author: 'Name'
   },
   {
      title: 'Book2',
      author: 'Name2'
   }
]


const getTheTitles = function() {

   let titles = books.map(a => a.title);
   return titles
};

getTheTitles()


// Do not edit below this line
module.exports = getTheTitles;
