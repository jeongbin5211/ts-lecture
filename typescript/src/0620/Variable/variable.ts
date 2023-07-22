// var
// 함수레벨스코프

function varExample () {
  // console.log(varVariable); // undefined
  var varVariable = 'Hello Var';
  console.log(varVariable); // Hello Var
}

varExample();

// let 블록레벨요소 블록({}) 내에서만 접근 가능
// 재선언은 불가능하지만 재할당은 가능
// 호이스팅은 발생하지만 초기화 이전에 변수에 접근하려고 하면 Reference Error가 발생
// TDZ(temporal dead zone) 임시 사각 지대에서 오류 발생

function letExample() {
  // console.log(letVariable); // Reference Error 발생
  let letVariable = 'Hello Let';
  console.log(letVariable); // Hello Let
}

letExample()

// const
// 블록레벨요소 블록({}) 내에서만 접근 가능
// 재선언 불가능, 재할당 불가능
// 상수를 선언할 때 사용하는 변수, 선언과 동시에 초기화를 해야한다.

function constExample() {
  // console.log(constVariable); // Conference Error
  const constVariable = 'Hello Const';
  console.log(constVariable); // Hello Const
  // constVariable = 'Bye Const' // Error
}

constExample();

// 변수 선언
// 변수 변수명: 타입 = 값;
let car: string = "BMW";

// 타입 추론(Type inference)
let color = 'red'; // 'color'는 자동으로 문자열 타입으로 추론됩니다.
// color = 1; // 'number' 형식은 'string' 형식에 할당할 수 없습니다.

// 변수명(식별자) 지정 방법
/* 
  식별자 : 변수, 함수, 클래스 등을 고유하게 구분하는 이름

  식별자 규칙
  알파벳 문자, 달러, 언더바로 시작가능 이후 숫자 포함 가능
  공백을 포함할 수 없음
  특수문자 포함할 수 없음 (달러, 밑줄 예외)
  예약어를 사용할 수 없음 (let, const, var, function, class 등)
*/

let computer: string = 'samsung book3';
let $name: string = 'JeongBin';
let _color: string = 'blue';
// let let: string = 'hello let'; // 'let'은 'let' 또는 'const' 선언에서 이름으로 사용할 수 없습니다.

