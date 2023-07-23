// 인터페이스(interface = 상호작용) 
var student6;
student6 = {
    born: 1996,
    name: 'jeongbin',
};
function printLabel(labbelledObj) {
    console.log(labbelledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function createSquare(config) {
    // {color: string, area: number} 반환값의 타입
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var userA = { name: 'jeongbin', age: 28 };
var userB = { name: 'jiyoon', age: 28, etc: true };
//! 익명 인터페이스
var ceo = { name: "jeongbin", age: 40 };
function printCeo(me) {
    console.log(me.etc ? "".concat(me.name, " ").concat(me.age, " ").concat(me.etc) : "".concat(me.name, " ").concat(me.age));
}
printCeo(ceo);
