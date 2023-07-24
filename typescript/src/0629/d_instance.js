// 인스턴스
// 클래스 || 인터페이스에 의해서 정의된 구조를 가진 객체(그 자체)
var Obj = /** @class */ (function () {
    function Obj(name, age) {
        this.name = name;
        this.age = age;
    }
    Obj.prototype.greet = function () {
        console.log("".concat(this.name, " & ").concat(this.age));
    };
    return Obj;
}());
var Jeongbin = new Obj("Jeongbin", 28);
console.log(Jeongbin);
Jeongbin.greet(); // Jeongbin & 28
