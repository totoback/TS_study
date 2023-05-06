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


function sayHi(x? :string ){
  if (x) {
    console.log('안녕하세요 ' + x)
  } else {
    console.log('왜입력안함')
  }
} 

function rundom(x:number|string):number{
  return x.toString().length
}

function 결혼가능하냐(money :number, house :boolean, charm :string) :string|void{
  let score :number = 0;
  score += money;
  if (house === true){
    score += 500
  }
  if (charm === '상'){
    score += 100
  }
  if (score >= 600){
    return '결혼가능'
  } 
}
console.log(결혼가능하냐(100,true,'상')) 

// 타입 확정하기 Narrowing
function 내함수(x:number|string){
  let array:number[]=[];
  if(typeof x === 'number'){
    array[0] = x;
  }
}
function 내함수1(x:number|string){
  if(typeof x === 'string'){
    return x + '1'
  } else {
    return x + 1
  }
}
내함수(123)
// 타입 확정하기 Assertion
function 내함수2(x:number|string){
  let array:number[]=[];
  array[0] = x as number; //타잎 덮어쓰기

}
내함수2(123)