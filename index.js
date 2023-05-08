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
        console.log("안녕하세요 " + x);
    }
    else {
        console.log("왜입력안함");
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
    if (charm === "상") {
        score += 100;
    }
    if (score >= 600) {
        return "결혼가능";
    }
}
console.log(결혼가능하냐(100, true, "상"));
// 타입 확정하기 Narrowing
function 내함수(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
}
function 내함수1(x) {
    if (typeof x === "string") {
        return x + "1";
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
var 동물들 = "고양이";
var 동물 = { name: "kim", age: 20 };
var 출생지역 = "seoul";
var 출생지역2 = { region: "seoul" };
출생지역2.region = "busan"; //오브젝트안에 키값을 변경이 가능하다
var 사람 = {
    name: "엠버",
};
사람.name = "유라"; //에러띄우는거랑 JS실행이랑 상관없음, 에디터 에러일 뿐(참고)
var position = { x: 10, y: 20 };
var 숙제 = { color: "블랙", size: 20, position: [1, 2, 3] };
var 검사 = { name: "kim", phone: 123 };
//Literal types
var 접니다;
function 함수(묵찌빠) {
    return ["가위"];
}
var 자료 = {
    name: "kim",
};
자료.name;
function 내함수(a) { }
내함수(자료.name);
var 함수다 = function (a) {
    return 3;
};
var 회원정보 = {
    name: 'kim'
};
number,
    changeName;
(function () { return void ; },
);
var cutZero = function (x) {
    var result = x.replace('0', "");
    return result;
};
function removeDash(x) {
    var result = x.replace('-', "");
    return parseFloat(result);
}
