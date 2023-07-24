// 배열
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// 배열 메소드
//? 1. push(): 배열의 끝에 요소를 추가
var list3 = [1, 2, 3];
list3.push(4); // [1, 2, 3, 4]
//? 2. pop(): 배열의 마지막 요소를 제거후 반환
var list4 = [1, 2, 3];
// let last: number[] = list4.pop(); // last = 3, list4[1, 2]
//? 3. shift(): 배열의 첫번째 요소를 제거 후 반환
var list5 = [1, 2, 3];
// let first: number = list.shift() first = 1
//? 4. unshift(): 배열의 시작 부분에 요소 추가
var list6 = [1, 2, 3];
list.unshift(0); // [0, 1, 2, 3]
var Lions = [
    { name: "lionKing", age: 2 },
    { name: "lionQueen", age: 4 }
];
//! 배열과 반복문
//? for문
var list7 = [1, 2, 3];
var length2 = list7.length;
for (var i = 0; i < length2; i++) {
    console.log(list7[i]);
}
//? for of 문 (배열, 객체) // A of B : B 의 A
for (var _i = 0, list7_1 = list7; _i < list7_1.length; _i++) {
    var item = list7_1[_i];
    console.log(item);
}
//? forEach문
list7.forEach(function (item) {
    console.log(item);
});
// for of반복문 (with.함수)
function arraySum(list7) {
    var sum = 0;
    for (var _i = 0, list7_2 = list7; _i < list7_2.length; _i++) {
        var num = list7_2[_i];
        sum += num;
    }
    return sum;
}
//! 배열의 변형
//? 1. map 메서드(method)***
// 배열 내의 모든 요소 각각에 대해 제공된 함수를 호출한 결과를 모아서
// 새로운 배열을 반환
var numbers = [1, 2, 3];
var doubledNumbers = numbers.map(function (num) {
    return num * 2;
});
console.log(doubledNumbers); // [2, 4, 6]
//? filter 메서드
// 제공된 함수의 테스트를 통과하는 모든 요소를 모아
// 새로운 배열로 반환
var evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2]
//? 3. reduce 메서드
// 배열의 각 요소에 대해 제공된 reducer 함수를 실행한 후
// 단일 출력값으로 줄입니다.
var sum = numbers.reduce(function (accumulator, currentVal) { return accumulator + currentVal; }, 0);
console.log(sum);
