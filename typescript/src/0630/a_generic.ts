// 제네릭(Generic)
// 다양한 타입을 하나의 표현식으로 처리할 수 있는 프로그래밍 기법 중 하나
// 코드의 중복을 줄이고, 재사용성을 높이며, 타입 안정성을 보장할 수 있는 기능

// 재사용성이 높은 컴포넌트를 만들 때 자주 활용 (컴포넌트는 한가지 타입보다 여러 가지 타입에서 동작)

//! 제네릭 사용 법 & 호출
// 타입을 마치 함수의 매개변수(파라미터)처럼 사용하는 것을 의미

function getText(text: any) {
    return text;
}

getText("hi"); // 'hi'
getText(10);   // 10
getText(true); // true

function getTextGeneric<T>(text: T): T {
    return text;
}

getTextGeneric<string>("hi");   // 'hi'
getTextGeneric<number>(20);     // 20
getTextGeneric<boolean>(false); // false


function logText<T>(text: T): T {
    return text;
}

// 1.
const text = logText<string>("Hello Generic");
// 2.
const text2 = logText("Hello Generic")

//! 제네릭 타입 변수
function logTextError<T>(text: T): T {
    // console.log(text.length); => 'T' 형식에 'length' 속성이 없습니다.
    return text;
}

//! 배열 제네릭 표시 (Array<T>, T[])
// 함수 코드는 T라는 변수 타입을 받고, 매개변수 값으로는 배열 형태인 T를 받습니다.
// 매개변수: [1, 2, 3], 반환 값: 3(number)
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    return text;
} 

function logTextLength2<T>(text: Array<T>): Array<T> {
    console.log(text.length);
    return text;
}

//! 제네릭 타입

//? 제네릭 인터페이스

function logTextType<T>(text: T): T {
    return text;
}
// 1.
let str: <T>(text: T) => T = logTextType;
// 2.
let str2: {<T>(text: T): T} = logTextType;


interface GenericLogTextFn {
    <T>(text: T): T;
}
function logTextGenericType<T>(text: T): T {
    return text;
}

let myString: GenericLogTextFn = logTextGenericType;

//#
interface GenericLogTextFn2<T> {
    (text: T): T;
}
function logTextGenericType2<T>(text: T): T {
    return text;
}

let myString2: GenericLogTextFn2<string> = logTextGenericType2;

//! 제네릭 클래스

class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }
    getItem(): T {
        return this.item;
    }
}

let box1 = new Box<number>(42);
console.log(box1.getItem); // 42

let box2 = new Box<string>("hello");
console.log(box2.getItem); // "hello"

//! 제네릭 제약 조건(확장)

// function logTextError2<T>(text: T): T {
//     console.log(text.length); text 타입이 아직 미정이라 오류발생
//     return text;
// }

interface LengthWise {
    length: number;
}

function logTextError2<T extends LengthWise>(text: T): T {
    console.log(text.length);
    return text;
}
// logTextError2(10) 숫자타입에는 length가 존재하지 않으므로 오류
logTextError2({length: 0, value: "hi"}); // 0
// text.length 코드는 객체의 속성 접근과 같이 동작하므로 오류가 나지 않음

//! 객체의 속성을 제약하는 방법

// keyof 키워드는 타입 값에 존재하는 모든 프로퍼티의 키값을 union 형태로 리턴 받습니다.
function getProperty<T, O extends keyof T>(obj: T, key: O) {
    return obj[key];
}

let objects = { a: 1, b: 2, c: 3};
getProperty(objects, 'a');
// getProperty(objects, 'z');
// 위 함수호출이 오류가 나는 이유
// 제네릭을 선언할 때 <O extends keyof T> 부분에서 첫 번째 인자로 받는 객체에 없는 속성들은 접근할 수 없게끔 제한했기 때문이다.

//! 제네릭 사용 목적

// 1. 코드의 재사용성 증가

// function printAll<T>(arr: T[]) {
//     arr.forEach((item) => 
//         console.log(item)
//     )
// }
function printAll<T>(arr: T[]) {
    arr.forEach(function (item) {
        console.log(item);
    })
}
console.log('-----');
printAll<number>([1, 2, 3]); // 1 2 3 각각 출력
printAll<string>(["a", "b", "c"]); // a b c 각각 출력

// 2. 타입의 안정성을 보장합니다.
function printAll2<T>(arg: T): T {
    return arg;
}

let resultGeneric = printAll2<string>("hello");
let resultGeneric2 = printAll2<number>(123);

// let errorResult = printAll2<string>(123) 오류를 방지할수있음

// 3. 타입 추론 기능
// 함수의 반환 타입이 예측 가능하므로 코드의 가독성이 향상되고 버그 방지가 가능합니다.