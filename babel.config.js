module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react' ,'@babel/preset-typescript'],
};

// Babel은 @babel/core에 플러그인들을 연결해서 파싱, 변환, 출력을 수행한다.
// preset - 플러그인들의 집합
// @babel/preset-env -ES6 이상의 문법을 ES5 이하로 변환해준다.
// @babel/preset-react - jsx 문법으로 작성된 react 코드는 js 코드로 변환해준다.
