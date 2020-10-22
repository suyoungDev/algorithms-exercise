// Objects!
// one of the JS's data types.
// a collection of related data and/or functionality
// nearly all objects in JS are instances of Object
// object = { key : value };


// Object는 group화가 되어 관리를 용이하게 한 것.
const ellie = {name: 'ellie', age: 20};
// 위와 같이!

function print(person){
    console.log(person.name);
    console.log(person.age);
}

print(ellie); //이렇게 간편하게 할 수 있다.


// 1. Literals and Properties

// 오브젝트를 만드는 방법 두가지. {} 와 class constructor이용
const obj1 = {}; // Object literal sytax
const obj2 = new Object();  // object constructor syntax


// 2. Computed Properties
// 접근방법 2가지. dot notaion, [] notation
// key should be always string 'str'
console.log(ellie.name);
console.log(ellie['name']);


// 3. Property value shorthand
const person1 = { name:'bob', age:20};

function makePerson(name, age){ 
    return{
        name,
        age
    };
}


// 4. Constructor Function

//순수하게 오브젝트를 생성하는 함수명은
// Person 대문자로 시작하도록 한다
// return 쓰지않고 this. 를 사용
// class에서 constructor을 쓴것 처럼!

function Person(name, age){  // 3번과 똑같은 함수!
    // 생략된 것: this:{};
    this.name = name;
    this.age = age;
    // 생략된 것: return this;
}

// 호출할 때:
const person2 = new Person('ellie', 30);



// 5. in Operator: property existence check (let key in obj)
// 해당 오브젝트에 key가 있는지 확인하는 것

console.log('name' in ellie); // true or false 반환
// 정의하지않은 키 접근 시 : undefined



// 6. for...in , for...of
// for( let key in obj)

for (let key in ellie){
    console.log(key); // ellie안에 있는 key가 모두 출력됨
}

// for (value of iterable) 배열과같은 반복가능한 것
const array = [1,2,3,4,5];
for (value of array){
    console.log(value);
}




// 7. Fun Cloning

const user = { name: 'ellie' , age: 20};
const user2 = user;
console.log(user);

user2.name = 'coder'
console.log(user2); // 똑같이 나옴
console.log(user); // user2이름을 변경한거지만 name: coder로 나옴

// old way: cloning
const user3 = {};
for( key in user){
    user3[key] = user[key];
}
console.log(user3); // 복사되어 나옴


// new way: Object.assign
const user4 = {};
// Object.assign(복사할target, 복사할source) 
// 뒤에나온 source를 앞에나온걸 덮어씀!
Object.assign(user4, user);
console.log(user4);





  