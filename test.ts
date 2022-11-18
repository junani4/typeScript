//:타입을 정의하는 타입표기
let str: string = 'hi'; //String 
let num: number = 1; //Number
let bool: boolean = true; //Boolean

//Object
let arr: number[] = [1, 2, 3]; //Array
// let arr: Array<number> = [1, 2, 3,] 제네릭 사용시

let arr2: [string, number] = ['hi', 10]; //Tuple 튜플은 배열의 길이 고정 각요소의 타입 지정

//Enum 특정 값들의 집합
enum Avengers { Capt = 2, IronMan, Thor}
let hero: Avengers = Avengers.Capt; // == let hero: Avengers = Avengers[0];
let hero2: Avengers = Avengers[4]; //Thor 임의 변경 가능

//Any 기존에 자바스크립트로 구현되어 있는 웹 서비스 코드에 타입스크립트를 
// 점진적으로 적용할 때 활용하면 좋은 타입입니다. 단어 의미 그대로 모든 타입에 대해서 허용한다는 의미를 갖고 있습니다.

let str1: any = 'hi';
let num1: any = 1;
let bool1: any = true;
let arr1: any = ['a', 2, false];

//Void 변수에 undefined와 null만 할당하고, 함수에는 반환 값을 설정할 수 없음
let unuseful: void = undefined;
function notuse(): void {
    console.log('sth');
}

//Never 함수의 끝에 절대 도달하지 않는 의미
function neverEnd(): never{
    while(true) {
        
    }
}