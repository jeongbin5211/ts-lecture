// async & await

// async: 함수를 비동기 함수로 정의
// await: 비동기 작업의 결과를 기다리는 키워드
//! async & await를 함께 사용하면 동기적으로 처리하는것처럼 코드를 작성가능

//! async 함수 작성하기

async function fetchDataA(): Promise<any> {
    // 비동기 작업 수행
    // 작업이 성공적으로 완료되면 결과 반환
    // 작업 중 에러가 발생하면 에러를 throw합니다.
}

//! await 표현식 사용
async function doSomething() {
    // async함수 내에서 발생하는 에러는 js의 try-catch문을 사용하여 처리
    try {
        if (/* 에러 조건 */ null) {
            throw new Error('에러 메시지');
        }
        const result = await fetchDataA();
        // 비동기 작업의 결과 사용

    } catch (error) {
        // 에러 사용
    }
}

// Promise.reject와 예외처리
async function fetchData(): Promise<any> {
    try {
        if (null) { // (에러 조건)
            throw new Error('에러 메시지');
        }

        const result = await fetchDataA();
        // 비동기 작업의 결과 사용
    } catch (error) {
        // 에러 처리
    }
}


// Promise.catch와 에러 처리
async function fetchDataB(): Promise<any> {
    const result = await fetchDataA().catch((error) => {
        // 에러 처리
    });
    // 비동기 작업의 결과를 사용
}