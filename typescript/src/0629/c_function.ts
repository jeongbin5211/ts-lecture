// 함수

function add(x: number, y: number): number {
    return x + y;
}

let result = add(5, 3);
console.log(result); // 8

//! 함수 표현식
// 함수 표현식을 사용하면 함수를 변수에 할당 가능

let add2 = function (x: number, y: number): number {
    return x + y;
}
// 함수 호이스팅을 피할 수 있다. (안전성)


//! 함수와 메서드의 차이
//? 1. 호출 방식의 차이
//? 2. 'this'키워드의 차이
// 메서드 내부에서 this 키워드를 사용하면 그 메서드를 소유하고 있는 객체를 뜻함.
// 메서드를 다른 변수에 할당하거나 다른 구문에서 호출할 경우 this가 변경될 수 있다.

// 일반 함수에서 this 키워드는 전역 객체 또는 정의된 대로를 뜻함.


//! 화살표 함수
type MyFunc = (x: number, y: number) => number;

let add4: MyFunc = (x, y) => {
    return x + y;
}

let add3 = (x: number, y: number): number => {
    return x + y;
}

//? 화살표 함수의 this키워드
// 자신만의 'this' 바인딩을 생성하지 않습니다.
// 화살표 내부에서 this를 참조할 경우, 화살표 함수를 감싸는 (외부의)코드의 this를 참조합니다.
let student1 = {
    name: "jeongbin",
    courses: ["Java", "Html"],
    showCourses() {
        this.courses.forEach((course) => {
            console.log(this.name + " studies " + course);
            // 여기서 this는 student1 객체의 속성을 참조
        });
    },
};

student1.showCourses(); // jeongbin studies Java
                        // jeongbin studies Html

