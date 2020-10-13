// Rewrite the code 
// so the global array bookList 
// is not changed inside either function.
// The add function should add 
// the given bookName 
// to the end of the array passed to it 
// and return a new array (list). 
// The remove function should remove the given bookName 
// from the array passed to it.


// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);


// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookName) {
    let newList = bookList.concat(bookName);
    return newList;
  
  // Change code above this line
}

// Change code below this line
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
      let newList = bookList.slice(book_index, 1);
    return newList;
    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);


// Add your code below this line
function add(arr, bookName) {
    let newArr = [...arr]; // Copy the bookList array to a new array.
    newArr.push(bookName); // Add bookName parameter to the end of the new array.
    return newArr; // Return the new array.
  }
  
  /* This function should remove a book from the list and return the list */
  // New parameters should come before the bookName one
  
  // Add your code below this line
  function remove(arr, bookName) {
    let newArr = [...arr]; // Copy the bookList array to a new array.
    if (newArr.indexOf(bookName) >= 0) {
      // Check whether the bookName parameter is in new array.
      newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
      return newArr; // Return the new array.
    }
  }


  function add(list, bookName) {
    return [...list, bookName];
  }
  
  /* This function should remove a book from the list and return the list */
  // New parameters should come before the bookName one
  
  function remove(list, bookName) {
    return list.filter(book => book !== bookName);
  }



  //

  const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const names = users.map(user => user.name);
  console.log(names); // [ 'John', 'Amy', 'camperCat' ]
  



var ratings = [];
for(var i=0; i < watchList.length; i++){
  ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
}


const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
  }));


const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));




// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Add your code below this line
  this.forEach(a => newArray.push(callback(a)));
  // Add your code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});




Array.prototype.myMap = function(callback) {
    var newArray = [];
  
    // Add your code below this line
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i]));
    }
    // Add your code above this line
  
    return newArray;
  };


  Array.prototype.myMap = function(callback, arr = [], i = 0) {
    return i < this.length
      ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
      : arr;
  };
  

  var filteredList = watchList
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  })
  .filter(movie => {
    return parseFloat(movie.rating) >= 8.0;
  });
  


  var filteredList = watchList
  .map(function(e) {
    return { title: e["Title"], rating: e["imdbRating"] };
  })
  .filter(e => e.rating >= 8);

console.log(filteredList);




// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  var newArray = [];

for( let i = 0; i <this.length ; i++){
  if( callback(this[i])===true){
    newArray.push(this[i]);
  }
}

  // Only change code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});




Array.prototype.myFilter = function(callback){
    // Only change code below this line
    let newArray = [];
    this.forEach(function(x) {
      if (callback(x) == true) {
        newArray.push(x);
      }
    });
    // Only change code above this line
    return newArray;
  };




  const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
  }, {});
  console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }
  



  ////

  function getRating(watchList){

    var averageRating =
    watchList
      // Use filter to find films directed by Christopher Nolan
      .filter(film => film.Director === "Christopher Nolan")
      // Use map to convert their ratings from strings to numbers
      .map(film => Number(film.imdbRating))
      // Use reduce to add together their ratings
      .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    // Divide by the number of Nolan films to get the average rating
    watchList.filter(film => film.Director === "Christopher Nolan").length;
    return averageRating;
  }
  console.log(getRating(watchList));
  


  function getRating(watchList){
    // Add your code below this line
    var count = 0;
    var averageRating = watchList.reduce((sum,movie) =>  {
      if (movie.Director == "Christopher Nolan") {
        count+=1;
        return sum + parseFloat(movie.imdbRating);
      }
      return sum;
    }, 0) / count;
    // Add your code above this line
    return averageRating;
  }
  console.log(getRating(watchList));
  

  function getRating(watchList) {
    // Add your code below this line
    const averageRating = watchList.reduce(({ sum, count }, { Director: dir, imdbRating: rating },  idx, arr) => {
      if (dir === 'Christopher Nolan') {
        count++;
        sum += Number(rating);
      }
      return idx === arr.length - 1
        ? sum / count
        : { sum, count };
    }, { sum: 0, count: 0 });
    // Add your code above this line
    return averageRating;
  }
  console.log(getRating(watchList));



  function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  ascendingOrder([1, 5, 2, 3, 4]);
  // Returns [1, 2, 3, 4, 5]
  
  function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1;
    });
  }
  reverseAlpha(['l', 'h', 'z', 'b', 's']);
  // Returns ['z', 's', 'l', 'h', 'b']
  



  var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
let newArr = [...arr];
newArr.sort(function(a, b){
  return a - b;
})
return newArr;

  // Only change code above this line
}
nonMutatingSort(globalArray);


var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
  // Add your code above this line
}
nonMutatingSort(globalArray);



var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(obj => {
      return obj !== "";
    })
    .join("-")
    .toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"


function urlSlug(title) {
    return title
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .join("-");
  }


  function checkPositive(arr) {
    // Only change code below this line
  return arr.every(function(value){
    return value  > 0;
  })
  
    // Only change code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);
  function checkPositive(arr) {
    // Add your code below this line
  
    return arr.every(val => val > 0);
    // Add your code above this line
  }



  //Un-curried function
function unCurried(x, y) {
    return x + y;
  }
  
  //Curried function
  function curried(x) {
    return function(y) {
      return x + y;
    }
  }
  //Alternative using ES6
  const curried = x => y => x + y
  
  curried(1)(2) // Returns 3



  function add(x) {
    // Only change code below this line
  return y => z=> x+y+z;
    // Only change code above this line
  }
  add(10)(20)(30);
  
  