// 객체 지향 프로그래밍
// 객체지향 프로그래밍(OOP)은 프로그래밍 패러다임 중 하나로,
// 소프트웨어를 객체들의 집합으로 보고 이들이 상호작용하는 방식으로
// 프로그램을 설계하고 구현하는 것을 의미합니다.
//! 1. 클래스(Class)
var Car4 = /** @class */ (function () {
    function Car4(color) {
        this.color = color;
    }
    Car4.prototype.drive = function () {
        console.log("Driving");
    };
    return Car4;
}());
var myCar = new Car4("red");
console.log(myCar.color);
myCar.drive();
