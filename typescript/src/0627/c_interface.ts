// 인터페이스(interface = 상호작용) 

// 타입별칭 vs 인터페이스
// 타입을 넣는것 vs 지정하는것

type Human = {
    born: number;
    name: string;
}

interface Human2 {
    born: number;
    name: string;
}

let student6: Human2;

student6 = {
    born: 1996,
    name: 'jeongbin',
}

// student6 = "Hjb";

// 인터페이스
// 타입 검사기가 타입 별칭보다 더 빨리 작동합니다.
// 오류 메시지를 더 구체화하여 보여줍니다.

interface LabelledValue {
    label: string;
}

function printLabel(labbelledObj: LabelledValue) {
    console.log(labbelledObj.label);
}

let myObj = {size: 10, label: 'Size 10 Object'};
printLabel(myObj);

//? 선택적 프로퍼티

interface SquareConfig {
    color?: string;
    width?: number; 
}

function createSquare(config: SquareConfig): {color: string, area: number} {
    // {color: string, area: number} 반환값의 타입
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: "black"});
console.log(mySquare);

interface User1 {
    name: string;
    age: number;
    etc?: boolean; // 선택 속성
}

let userA: User1 = {name: 'jeongbin', age: 28}
let userB: User1 = {name: 'jiyoon', age: 28, etc: true};

//! 익명 인터페이스

let ceo: {
    name: string,
    age: number,
    etc?: boolean,
} = { name: "jeongbin", age: 40};

function printCeo(me: {name: string, age: number, etc?: boolean}) {
    console.log(
        me.etc ? `${me.name} ${me.age} ${me.etc}` :  `${me.name} ${me.age}`
    )
}

printCeo(ceo); // jeongbin 40

// 읽기 전용 속성
// readonly 사용
// 수정 불가능

interface Page {
    readonly text: string;
}

function read(page: Page) {
    // text의 속성을 수정하지 않고 읽는 것
    console.log(page.text)

    // page.text += "!";
}

//! 인터페이스 확장
// extends

interface Writing2 {
    title: string
}

interface Book extends Writing2 {
    pages: number;
}

let myBook: Book = {
    pages: 200,
    title: "hello"
}