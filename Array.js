// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];


// 2. index position
const fruits = ['apple', 'banana'];
fruits[0] // apple
fruits[1] // banana


// 3. Looping over an array
// print all fruits

// 방법 1. for loop
for(let i = 0; i< fruits.length ; i++){
    console.log(fruits[i]);
}

// 방법2. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// 방법3. forEach
fruits.forEach(item => console.log(item); )



// 4. Addition, Deletion, Copy
// push: add an item to the end
fruits.push('strawberry', 'orange');

// pop: remove an item from the end
fruits.pop(); //orange 없어짐

// unshift: 앞에서 추가
fruits.unshift('lemon');

// 앞에서 빼기
fruits.shift(); // 레몬빠짐

// note !! 
// shift, unshift는 pop과 push에 비해 엄청엄청 느리다.

// splice: 지정된 index에서 아이템 삭제
// splice(start-index,몇개-삭제할지);
// 몇개삭제할지 지정하지않으면 그뒤는 다 삭제함
// splice(start-index, number-count, 추가할-데이터)
// 지워진 자리에 추가할 데이터가 추가됨 !!

// concat: combine two arrays. 배열 합하기~
const fruits2=['mango', 'gummy'];
const newFruits = fruits.concat(fruits2);



// 5. Searching: indexOf, includes, lastIndexOf()
fruits.indexOf('apple');
fruits.includes('mango'); 
// 포함되어있는지 true or false로 반환

// lastIndexOf: 마지막 값이 맞다면 index를 반환함
