// async & await

// async: 함수를 비동기 함수로 정의
// await: 비동기 작업의 결과를 기다리는 키워드

//! async 함수 작성하기

async function fetchDataA(): Promise<any> {
    // 비동기 작업 수행
    // 작업이 성공적으로 완료되면 결과 반환
    // 작업 중 에러가 발생하면 에러 throw
}

//! await 표현식 사용
async function doSomething() {
    // async함수 내에서 발생하는 에러는 js의 try-catch문을 사용하여 처리
    try {
        const result = await fetchDataA();
        // 비동기 작업의 결과 사용

    } catch (error) {
        // 에러 사용
    }
}
// 01:40:00