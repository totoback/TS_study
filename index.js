//primitive types 타입스크립트 기본 타입 정리
//변수 만들기
var 이름 = "kim";
var 나이 = 50;
var 결혼했니 = true;
var 회원들 = ["kim", "park"];
//array
var 회원들2 = ["kim", "park"];
//object 자료 타입 선정
var member = {
    member1: "kim",
    member2: "park",
};
//ex
var Name = "joung";
var Age = 28;
var Exname = {
    title: "글쎄",
    name: "모르겠다",
};
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
// Union type
var 회원2 = 123;
var 오브젝트 = { a: "123" };
// 모든 할당에 에러가 안남
var 이름2;
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
//함수에 타입 지정하는 법
function sayHi(x) {
    if (x) {
        console.log('안녕하세요 ' + x);
    }
    else {
        console.log('왜입력안함');
    }
}
function rundom(x) {
    return x.toString().length;
}
function 결혼가능하냐(money, house, charm) {
    var score = 0;
    score += money;
    if (house === true) {
        score += 500;
    }
    if (charm === '상') {
        score += 100;
    }
    if (score >= 600) {
        return '결혼가능';
    }
}
console.log(결혼가능하냐(100, true, '상'));
// 타입 확정하기 Narrowing
function 내함수(x) {
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
}
function 내함수1(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
내함수(123);
// 타입 확정하기 Assertion
function 내함수2(x) {
    var array = [];
    array[0] = x; //타잎 덮어쓰기
}
내함수2(123);
