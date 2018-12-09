import { put, takeLatest, all } from 'redux-saga/effects';
// import axios from 'axios';

function* fetchNews() {
    const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json() );
    // put -> redux store에 action을 dispatch한다.
    // yield ->  제너레이터 함수의 실행을 중지시키거나 그리고  yield 키워드 뒤에오는 표현식[expression]의 값은 제너레이터의 caller로 반환된다.
    // 제너레이터 버전의 return 키워드로 생각 할 수 있다.
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield
    yield put({ type: "NEWS_RECEIVED", json: json.articles });
}
function* actionWatcher() {
    // takeLatest는 여러 개의 사가 태스크들이 동시에 실행되게 하지 않습니다.
    // 새로운 액션이 dispatch되자 마자, 그것은 자신을 제외한 이전의 모든 포크된 태스크를 취소합니다 (이미 작동 중이더라도).
    // takeLatest는 가장 나중의 응답만 받고 싶은 AJAX 요청을 다룰 때에 유용합니다.
    // https://mskims.github.io/redux-saga-in-korean/advanced/Concurrency.html
    yield takeLatest('GET_NEWS', fetchNews)
}
export default function* rootSaga() {
    yield all([
        actionWatcher()
    ]);
}
