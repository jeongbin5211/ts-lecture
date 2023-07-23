// 배열

const warriors = ["jeongbin", "jiyoon"];

warriors.push("jimin");
// warriors.push(123);

//! 배열 타입
let arrayOfNumber: number[];
arrayOfNumber = [1, 2, 3, 4, 5];

// 타입은 string이고 반환 값으로 string배열을 반환하는 함수
let createString: () => string[]; // 함수 타입

// 타입은 각각의 string을 반환하는 함수 배열
let stringCreators: (() => string)[]; // 배열 타입

//! 유니언 타입 배열

// 타입: string 또는 number의 배열
let strOrArray: string | number[];

// 타입: 각각 number 또는 string 요소의 배열
let arrayOfStrOrArray: (string | number)[];

// 타입: (string | undefined)[]
const names = [
    "joengbin",
    "jiyoon",
    "eunjin",
    undefined
]

//! any 배열
// 초기에 빈 배열로 선언된 변수: any[] 타입으로 취급

let values = [];
values.push(" ");
values[0] = 0;

// values = [0, " "];

//! 다차원 배열
// 2차원 배열 or 두 개의 대괄호를 가집니다

//let arrayOfArray: number[][]; // 아래 변수랑 똑같음
let arrayOfArray: (number[])[]; // 배열의 배열 -> 첫번째 배열에 배열을 추가한다 라는뜻 

arrayOfArray = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
]

//! 배열 멤버
const defenders = ['jeongbin', 'jiyoon'];
const defender = defenders[0];

const students = ["eunjin", "hyeri", new Date(1997, 3, 14)];

const student_ = students[0]; // 유니언 타입이 배열에 상속됨

//! 스프레드 & 나머지 매개변수

// 스프레드

const teachers = ["A", "B", "C"];

const teacherAges = [99, 33, 22];

const merged = [...teachers, ...teacherAges];
console.log(merged); // ["A", "B", "C", 99, 33, 22];

// 나머지 매개변수 스프레드

function logGreet(greeting: string, ...names: string[]) {
    for (const name of names) {
        console.log(`${greeting}, ${name}`);
    }
}

const childs = ["A", "B", "C"];
logGreet("Hello", ...childs);

