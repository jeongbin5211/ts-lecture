// 인스턴스
// 클래스 || 인터페이스에 의해서 정의된 구조를 가진 객체(그 자체)

class Obj {
    name: string; // 속성(프로퍼티) : 상태를 지정
    age: number;

    // 생성자 함수
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() { // 메서드 : 특정 동작을 수행
        console.log(`${this.name} & ${this.age}`);
    }
} 

let Jeongbin: Obj = new Obj("Jeongbin", 28); // 변수 Jeongbin은 Obj클래스의 인스턴스
//! new 연산자는 객체를 생성하고 초기화하는데 사용됩니다.(생성자 함수 호출)

console.log(Jeongbin); // Obj { name: 'Jeongbin', age: 28}
Jeongbin.greet(); // Jeongbin & 28

// 객체지향 프로그래밍
// 프로토타입
// 모든 객체는 프로토타입이라는 다른 객체를 참조, 프로토타입 객체의 속성과 메서드를 상속받음
// 정의된 객체(개발자 생성)는 프로토타입을 상속받고 프로토타입은 Object를 상속받음