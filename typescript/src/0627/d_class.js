// 클래스
// 기본형태
// class 클래스 이름 {
//     [private | protected | public] 속성이름: 속성타입
// }
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello, ".concat(this.name);
    };
    return User;
}());
var user = new User("JeongBin", 23);
console.log(user); // User { name: 'JeongBin', age: 23 }
// user 변수에 User라는 클래스가 들어감
// 클래스의 생성자(constructor) -> 메서드
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var jiyoon = new Student("jiyoon", 24);
console.log(jiyoon);
