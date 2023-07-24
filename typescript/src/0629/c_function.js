// 함수
function add(x, y) {
    return x + y;
}
var result = add(5, 3);
console.log(result); // 8
//! 함수 표현식
// 함수 표현식을 사용하면 함수를 변수에 할당 가능
var add2 = function (x, y) {
    return x + y;
};
var add4 = function (x, y) {
    return x + y;
};
var add3 = function (x, y) {
    return x + y;
};
//? 화살표 함수의 this키워드
// 자신만의 'this' 바인딩을 생성하지 않습니다.
// 화살표 내부에서 this를 참조할 경우, 화살표 함수를 감싸는 (외부의)코드의 this를 참조합니다.
var student1 = {
    name: "jeongbin",
    courses: ["Java", "Html"],
    showCourses: function () {
        this.courses.forEach(function (course) {
            console.log(student1.name + " studies " + course);
            // 여기서 this는 student1 객체의 속성을 참조
        });
    },
};
student1.showCourses(); // jeongbin studies Java
// jeongbin studies Html
