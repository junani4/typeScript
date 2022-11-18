// let person = { name : 'jun', age: 25};

// function logAge(obj: { age: number }) {
//     console.log(obj.age); //25
// }

// logAge(person); //25

// 인터페이스를 적용하면
interface personAge {
    age: number;
}

function logAge(obj: personAge){
    console.log(obj.age);
}

let person = { name: 'jun', age: 25};
logAge(person); //인자가 좀 더 명시적으로 바뀜 

// interface 인터페이스_이름 {
//     속성?: 타입; //옵션 속성
// }

interface CraftBeer {
    name: string;
    hop?: number; //옵션 속성으로 선언
}

let myBeer = {
    name: 'Saporo'
};

function brewBeer(beer: CraftBeer) {
    console.log(beer.name); //Saporo
}

brewBeer(myBeer);

//옵션 속성의 장점 속성을 선택적으로 적용 인터페이스에 정의되어 있지 않은 속성에 대해서 인지

interface bera {
    name: string;
    hop?: number;
}

let myFav = {
    name: '31'
};

function iceCream(ice: bera) {
    console.log(ice.bbb); //err 정의되어 있지 않은 속성
}
iceCream(myFav);

// 읽기 전용 속성 인터페이스로 객체를 처음 생성할 때만 값을 할당 변겅할 수 없음
// interface CraftBeer {
//     readonly brand: string;
// }

let myBeer: CraftBeer = {
    brand: 'Belgian Monk'
};
myBeer.brand = 'Korean Carpenter'; //err

// 읽기 전용 배열
let arr: ReadonlyArray<number> = [1,2,3]; //readonly선언시 내용 변경 X
arr.splice(0,1); //err
arr.push(4); //err
arr[0] = 100; //err

//객체 선언과 관련된 타입
interface CraftBeer{
    brand?: string;
    [propName: string]: any; // 인터페이스 정의하지 않은 속성들을 추가로 사용하고 싶을 때
}

function brewBeer(beer: CraftBeer) {
    //..
}
brewBeer({ brandon: 'what' }); //err 오타로 인한 오류

let myBeer = { brandon: 'what' };
brewBeer(myBeer as CraftBeer);

//함수 타입
interface login {
    (username: string, password: string): boolean;
}

let loginUser: login;
loginUser = function(id: string, pw: string) {
    console.log('로그인 했습니다');
    return true;
}

//클래스 타입
interface BraftBeer {
    beerName: string;
    nameBeer(beer: string): void;
}

class myBeer implements BraftBeer {
    beerName: string = 'Baby Guinness';
    nameBeer(b: string) {
        this.beerName = b;
    }
    constructor() {}
}

//인터페이스 확장
interface Person {
    name: string;
}
interface Developer extends Person {
    skill: string;
}
let fe = {} as Developer;
fe.name = 'jun';
fe.skill = 'TypeScript';


interface Person {
    name: string;
}

interface Drinker {
    drink: string;
}

interface Developer extends Person, Drinker{
    skill: string;
}
let fe = {} as Developer;
fe.name = 'jun';
fe.skill = 'TypeScript';
fe.drink = 'Beer';

//하이브리드 타입
interface CraftBeer {
    (beer: string): string;
    brand: string;
    brew(): void;
}

function myBeer(): CraftBeer {
    let my = (function(beer: string) {}) as CraftBeer;
    my.brand = 'Beer Kitchen';
    my.brew = function() {};
    return my;
}

let brewedBeer = myBeer();
brewedBeer('My First Beer');
brewedBeer.brand = 'Pangyo Craft';
brewedBeer.brew();