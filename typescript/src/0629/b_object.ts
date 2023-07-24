// 객체

let obj: {name: string; age: number;} = {
    name: "jeongbin",
    age: 28,
};

//! 객체에서 속성 접근
//? 점 표기법
console.log(obj.name); // jeongbin
obj.name = " jiyoon"; // 객체에서 속성값 수정법

//? 대괄호 표기법
console.log(obj["age"]); // 28

//! 객체와 함수
let obj2: {
    name: string;
    age: number;
    greet() : string; // or greet: () => string;
} = {
    name: "JeongBin",
    age: 28,
    greet() {
        return `Hello, my name is ${this.name}`;
    },
}

console.log(obj2.greet()); // Hello, my name is JeongBin

interface Obj3 {
    name: string;
    age: number;
    greet: () => string;
};

let obj4: Obj3 = {
    name: "jiyoon",
    age: 28,
    greet() {
        return `Hello, my name is ${this.name}`;
    },
};
console.log(obj4.greet()); // Hello, my name is jiyoon