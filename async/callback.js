'use strict';

// JavaScript is synchronous. 동기적인 자바스크립트
// Excute the code block in order after hoisting.
// 호이스팅 된 이후부터, 코드블럭을 작성한 순서대로 동기적으로 실행함
// hoisting : var, function declartion이 자동적으로 제일 위로 올라가는 것
// call back = 나중에 다시 불러 실행하는 함수
console.log('1');
setTimeout( () => console.log('2'), 1000); // 1000 = 1초
console.log('3');
// 결과: 1 3 2


// 즉각적으로 실행하는 Synchronous Callback
function printImmediately(print){
  print();
}
printImmediately( ()=> console.log('hello')); // 동기


// Asynchronous callback 비동기 콜백
function printWithDelay(print, timeout){
  setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'),2000);  // 비동기


// callback hell example
class UserStorage{
  loginUser(id, password, onSuccess, onError){ // id, password를 받고 
    setTimeout(() => { // 사용자에게 받은 정보로 서버에 로그인 시도
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id); // 받아온 id로 role역할 요청
      } else {
        onError(new Error('not found'));
      }
    }, 2000); // 2sec후에 해당 셋타임아웃 코드블럭 실행
  }

  // 사용자가 역할을 받아올 때
  getRoles(user, onSuccess, onError){
    setTimeout(() => {
      if (user === 'ellie'){
        onSuccess({ name: 'ellie', role: 'admin'});
      } else{
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id, 
  password, 
  user => {
    userStoraged.getRoles(
      user,
      userWithRole=>{
        alert(`Hello, ${userWithRole.name}. you have a ${userWithRole.role} role.`)
      },
      error =>{
        console.log(error);
      }
      );
  }, 
  error =>{}
);

// 위의 콜백체인의 문제점?
// 콜백안에서 무언가를 호출하고, 그안에서 또다른 콜백을 호출,전달하고
// 그게 바로 콜백지옥..
// 읽기가 거북함(가독성 저하)
// 어떤식으로 연결되어있는지 한눈에 이해하기 힘듦
// 체인이 길어질수록 유지보수도 문제해결도 어려움
// 콜백지옥! 좋지않다!
// promise와 async를 이용하여 병렬적으로, 효율적으로 네트워크통신을 해보자!

