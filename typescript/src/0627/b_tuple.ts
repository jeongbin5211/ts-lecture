// 튜플
//? 일반적으로 배열은 0부터 여러 개의 단일 타입 객체를 포함할 수 있습니다.
//? TypeScript는 다양한 타입을 포함하고, 색인 되는 순서가 중요한 배열을 특별하게 분석할 수 있습니다. 
//? 이를 튜플이라고 부릅니다.
//! 튜플은 형태, 순서, 값의 개수가 고정된 배열이다.


let dayAndEvent: [number, string];

dayAndEvent = [1225, "Christmas"];

let [day, event_] = Math.random() > 0.5 ? [1225, "Christmas"] : [314, "whiteDay"];

//! 튜플의 할당 가능성
// 튜플에는 타입이 같더라도 배열을 할당할 수 없습니다.
// 명확하게 타입이 지정된 배열에는 배열 할당 가능

const A = [false, 123];
// const AB: [boolean, number] = A;
//! const A: [boolean, number] = [true, 123]; 이런 경우는 배열 할당 가능


const tuple: [boolean, number, string] = [false, 123, "tuple"];

const tuple2: [boolean, number] = [tuple[0], tuple[1]];

const tuple3: [boolean, number] = tuple2;

// const tuple4: [boolean, number] = tuple;
// '[boolean, number, string]' 형식은 '[boolean, number]' 형식에 할당할 수 없습니다.
//  소스에 3개 요소가 있지만, 대상에서 2개만 허용합니다.

//! 나머지 매개변수

// (string | number)[] : 배열에 해당

function logIn(name: string, value: number) {
    console.log(`${name} has ${value}`);
}

const pairArray = ["jeongbin", 1]; // 배열

// logIn(...pairArray);
// logIn은 튜플인데 pairArray는 배열이라서 오류 발생

//! 튜플 추론

function helloAndHi(input: string) {
    return [input[0], input.length]
}
// return값 자체에서 타입 추론을 해서 반환함 (string | number)
console.log(helloAndHi("Hello")); // ['H', 5]

const [hello, hi] = helloAndHi("Hello");
