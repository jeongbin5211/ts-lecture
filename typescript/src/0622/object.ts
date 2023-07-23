// 객체

//! 객체 타입
// 객체 타입 : 객체의 값과 동일한 속성명과 원시 타입을 갖는다.
// 값의 속성에 접근하려면 value.멤버 또는 value['멤버']구문 사용

const jeongbin = {
    phoneNumber: 12341234,
    address: "창원시"
};

jeongbin.phoneNumber; // 타입 number
jeongbin['address'];  // 타입 string

// jeongbin.name; => '{ phoneNumber: number; address: string; }' 형식에 'name' 속성이 없습니다.

//! 객체 타입 선언

let poetLater: {
    born: number,
    name: string
}

poetLater = {
    born: 1996,
    name: "Heo Jeong Bin"
}

// poetLater = "Ji Yoon"; => 'string' 형식은 '{ born: number; name: string; }' 형식에 할당할 수 없습니다.
// 하나라도 누락시키면 오류발생

//! 별칭 객체 타입

type Poet = {
    born: number,
    name: string
}

let poetLater2: Poet;

poetLater2 = {
    born: 1996,
    name: "Heo Jeong Bin"
}

// poetLater2 = "Jeong Bin" => 'string' 형식은 'Poet' 형식에 할당할 수 없습니다.

//! 구조적 타이핑

type WithFirstName = {
    firstName: string
};

type WithLastName = {
    lastName: string
}

const hasBoth = {
    firstName: "Jeong Bin",
    lastName: "Heo"
};

let withFirstName: WithFirstName = hasBoth;
let withLastName: WithLastName = hasBoth;

// 구조적 타이핑의 경우 덕 타이핑과 다릅니다.
// 덕 타이핑 : 동적 타이핑의 한 종류로 객체의 변수 및 메서드의 집합이 객체의 타입을 결정하는 것을 의미합니다. // 오리처럼 보이고 오리처럼 꽥꽥거리면 오리일 것이다.

// 타입 스크립트의 경우 타입 검사기에서 구조적 타이핑을 사용해서 정적(고정된) 타이핑 검사를 진행합니다.
//? 자바스크립트의 경우 : 덕 타이핑, 타입스크립트의 경우 : 구조적 타이핑

//! 중첩된 객체 타입

// type Poem = {
//     author: {
//         firstName: string;
//         lastName: string;
//     }
//     name: string;
// }

// const poemMatch: Poem = {
//     author: {
//         firstName: "Jeongbin",
//         lastName: "Heo"
//     }, name: 'butter'
// };

type Author = {
    firstName: string;
    lastName: string;
}

type Poem = {
    author: Author;
    name: string;
}

const poemMatch: Poem = {
    author: {
        firstName: "Jeongbin",
        lastName: "Heo"
    }, name: 'butter'
};

//! 객체 타입 유니언

//? 유추된 객체 타입 유니언

const poem2 = Math.random() > 0.5 ? { name: "Jeong Bin", pages: 10} : { name: "Ji Yoon", flag: true};

// { name: string, pages: number, flag: undefined } 또는
// { name: string, pages: undefined, flag: boolean }

// hover해보기
poem2.name;
poem2.pages;
poem2.flag;

//? 명시된 객체 타입 유니언

type Pages = {
    name: string;
    pages: number;
}

type Flag = {
    name: string;
    flag: boolean;
}

type Poem3 = Pages | Flag;

const peom3: Poem3 = Math.random() > 0.5 ? { name: "Jeong Bin", pages: 10} : { name: "Ji Yoon", flag: true};

peom3.name;
// peom3.pages; // 잠재적으로 없을 수 도 있는 속성을 배제시켜준다.
// peom3.flag;

//! 교차 타입
// 타입스크립트에서는 & (교차 타입)을 사용해 여러 타입을 동시에 나타낼 수 있다.

type Artwork = {
    genre: string;
    name: string;
};

type Writing = {
    pages: number;
    name: string;
};

type WrittenArt = Artwork & Writing;
// {
//     genre: string;
//     name: string;
//     pages: number;
// }

//* 
type ShortPoem = { author: string } & ({ kigo: string; type: "hello";} | {meter: number; type: "hi"})

const morning: ShortPoem = {
    author: "Jeong Bin",
    kigo: "Morning",
    type: "hello"
};

// const afternoon: ShortPoem = { 
//     author: "Ji Yoon",
//     type: "hi",
// }
// 'meter' 속성이 '{ author: string; type: "hi"; }' 형식에 없지만 '{ meter: number; type: "hi"; }' 형식에서 필수입니다.