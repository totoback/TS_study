//primitive types
let 이름: string = "kim";
let 나이: number = 50;
let 결혼했니: boolean = true;

let 회원들 = ["kim", "park"];

//array
let 회원들2: string[] = ["kim", "park"];
//object 자료 타입 선정
let Member: { member1: string; member2: string } = {
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
let 오브젝트 : {a: string | number}={a:'123'}

// 모든 할당에 에러가 안남
let 이름2 : any;