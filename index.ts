//primitive types 타입스크립트 기본 타입 정리
//변수 만들기
let 이름: string = "kim";
let 나이: number = 50;
let 결혼했니: boolean = true;

let 회원들 = ["kim", "park"];

//array
let 회원들2: string[] = ["kim", "park"];
//object 자료 타입 선정
let member: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};
//ex
const Name: string = "joung";
const Age: number = 28;

const Exname: {
  title: string;
  name: string;
} = {
  title: "글쎄",
  name: "모르겠다",
};

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
// Union type
let 회원2: number | string = 123;
let 오브젝트: { a: string | number } = { a: "123" };

// 모든 할당에 에러가 안남
let 이름2: any;

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

//함수에 타입 지정하는 법

function sayHi(x?: string) {
  if (x) {
    console.log("안녕하세요 " + x);
  } else {
    console.log("왜입력안함");
  }
}

function rundom(x: number | string): number {
  return x.toString().length;
}

function 결혼가능하냐(
  money: number,
  house: boolean,
  charm: string
): string | void {
  let score: number = 0;
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
function 내함수(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  }
}
function 내함수1(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}
내함수(123);
// 타입 확정하기 Assertion
function 내함수2(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; //타잎 덮어쓰기
}
내함수2(123);

// type alias-타입 변수
// 대문자 국룰
type Animal = string | number | undefined;
const 동물들: Animal = "고양이";

type Animal2 = { name: string; age: number };
let 동물: Animal2 = { name: "kim", age: 20 };

const 출생지역 = "seoul";
const 출생지역2 = { region: "seoul" };
출생지역2.region = "busan"; //오브젝트안에 키값을 변경이 가능하다
//하지만 락이 가능함

type Member3 = {
  readonly name: string;
  //읽기전용 - 실수로 수정하면 에러남
  name2?: string;
  //? string | undeifind
};
const 사람: Member3 = {
  name: "엠버",
};
사람.name = "유라"; //에러띄우는거랑 JS실행이랑 상관없음, 에디터 에러일 뿐(참고)

//&연산자로 object타입 합치기
type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY; //{x:number, y:number}
let position: NewType = { x: 10, y: 20 };

type Test = { color?: string; size: number; readonly position: number[] };
const 숙제: Test = { color: "블랙", size: 20, position: [1, 2, 3] };

type Check = { name: string; phone: number; email?: string };
const 검사: Check = { name: "kim", phone: 123 };

//Literal types
let 접니다: "하이" | "공부중";

function 함수(묵찌빠: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

var 자료 = {
  name: "kim",
} as const;
자료.name;

function 내함수(a: "kim") {}
내함수(자료.name);

// 함수와 methods에 type alias 지정하는 법
type 함수타입 = (a: string) => number;
let 함수다:함수타입 = function(a) {
  return 3;
}
let 회원정보 ={
  name : 'kim',
  plusOne(x:number) => number,
  changeName : ()=>void,
}

type CutType = (x:string) => string
let cutZero:CutType=function(x){
  let result = x.replace('0',"")
  return result
}
function removeDash(x:string):number{
  let result = x.replace('-',"");
  return parseFloat(result)
}