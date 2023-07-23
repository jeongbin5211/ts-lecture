// 타입 애너테이션

let phone;
phone = "Galaxy";   // any 타입

phone.toUpperCase();  // string 타입으로 바뀜

phone = 123;    // number 타입으로 바뀜
// phone.toUpperCase(); => 오류 발생

let phone2: string;
phone2 = "IPhone";

//? 타입 형태
// 타입스크립트는 변수에 할당된 값이 원래 타입과 일치하는지 확인하는 것 이상을 수행

let phone3 = "Galaxy S23";
phone3.length;
// phone3.push('!'); push는 배열 메소드라서 오류가 발생

const artist = {
    firstName: "JeongBin",
    lastName: "Heo"
};

// artist.middleName; => 'middleName' 속성이 없습니다.
