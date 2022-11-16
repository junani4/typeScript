// 타입스크립트 (자바스크립트와 달리 초기에 오류를 잡아냄)
// javascript가 실행되는 모든 곳에서 javascript로 변환이 가능
// data type은 ts가 직접 추론하도록 하는게 좋다 명시적코드는 X
// ex
// let a : number[] = [1, 2]; // 이것보다
let a = [1, 2]; //이게 보기 좋음
let b : string[] = ["i1","1"];
let c : boolean[] = [true]


type Age = number;
type Name = string;
type Player = { //Alias 상태로 재사용
    readonly name:Name
    age?:Age
}

const playerJun : Player = {
    name:"Jun"
}

const playerLynn : Player = {
    name:"lynn",
    age:12
}

// player.age가 undefined일 가능성 체크
// if(player.age && player.age < 10) {
// }

function playerMaker1(name:string) : Player {
    return {
        name
    }
}

const playerMaker2 = (name:string) : Player => ({name})

const jun = playerMaker1("jun")
jun.age = 12
// jun.name = "jaj" readonly 해서 오류

const numbers: number[] = [1, 2, 3, 4]
numbers.push(1)

// readonly 가 있으면 최초 선언 후 수정 불가
const names: readonly string[] = ["1", "2"]

// Tuple 정해진 갯수와 순서 
const p: [string, number, boolean] = ["jun", 12, false] 


// any: 아무 타입
// undefined: 선언X 할당X
// null: 선언O 할당X
// any 타입스크립트 탈출 (에러가 안남)
const d : any[] = [1, 2, 3, 4]
const e : any = true

d + e

//unknown타입은 모든 값을 나타냅니다.
let aa: unknown;
if(typeof aa === 'number') {
    let b = aa + 1
}

if(typeof aa === "string") {
    let b = aa.toUpperCase();
}
// void 아무것도 return하지 않는 함수에서 반환 자료형
function hello() {
    console.log('x')
}

const bb = hello()
// bb.toUpperCase() void

// never
function hello2():never {
    throw new Error("xxx")
}

function hello3(name:string|number) {
    if(typeof name === "string") {
        name //string
    } else if (typeof name === "number") {
        name //number
    } else {
        name //never 작동 x 위에서 string number를 받아서
    }
}