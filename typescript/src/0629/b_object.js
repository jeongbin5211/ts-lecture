// 객체
var obj = {
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
var obj2 = {
    name: "JeongBin",
    age: 28,
    greet: function () {
        return "Hello, my name is ".concat(this.name);
    },
};
console.log(obj2.greet()); // Hello, my name is JeongBin
;
var obj4 = {
    name: "jiyoon",
    age: 28,
    greet: function () {
        return "Hello, my name is ".concat(this.name);
    },
};
console.log(obj4.greet());
