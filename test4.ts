enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// 위와같이하면 Down = 2 , Left = 3, Right = 4로 증가
// 만약 초기 값을 주지 않았으면 0부터 차례로 1씩 증가

enum Response1 {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response1): void {
    //...
}

respond("Captain Pangyo", Response1.Yes); 

enum Wrong {
    A = getSomeValue(),
    B, //err
}

// 문자형 이넘 항상 명확한 값이 출력

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// 복합 이넘

enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

// 런타임 시점 이넘
enum E {
    X, Y, Z
}

function getX(obj: { X: number }) {
    return obj.X;
}

getX(E); // E의 X는 number이기에 정상 작동

enum LogLevel {
    ERROR, WARN, INFO, DEBUG
}

type LogLevelString = keyof typeof LogLevel;

function printImportant(key: LogLevelString, message: string) {
    const num = LogLevel[key];
    if(num <= LogLevel.WARN) {
        console.log('Log level key is: ', key);
        console.log('Log level value is: ', num);
        console.log('Log level message is: ', message);
    }
}
printImportant('ERROR', 'This is a message');

//리버스 매핑
enum Enum {
    A
}

let a = Enum.A;
let keyName = Enum[a];

//Union Type 타입 여러개를 연결하는 방식 유니온 타입 정의 방식
function logText(text: string | number) { // string or number
    // ...
}

//Union type 장점
// any를 사용하는 경우
function getAge(age: any) {
    age.toFixe(); //에러 발생, age의 타입이 any라서
    return age;
}

//유니온 타입을 사용하는 경우
function getAge2(age: number | string) {
    if (typeof age === 'number') {
        age.toFixed(); //age가 number라 작동
        return age;
    }
    if (typeof age === 'string') {
        return age;
    }
    return new TypeError('age must be number or string');
}

// Intersection Type 여러타입을 모두 만족하는 하나의 타입
interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    skill: number;
}

type Capt = Person & Developer; // 인터섹션 타입 정의 방식

// Capt의 타입
// {
//     name: string;
//     age: number;
//     skill: number;
// }

// 유니온 타입 주의점 
interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    skill: string;
}

function introduce(someone: Person | Developer) { 
    someone.name; // 정상
    someone.age; // 타입 오류
    someone.skill; // 타입 오류
}

// 둘다 가능하겠지 생각하지만 introduce() 함수를 호출하는 시점에 Person 타입이 올지 Deveploper 타입이 올지 알 수 없음
const capt: Person = { name: 'capt', age: 100};
introduce(capt);

const tony: Developer = { name: 'tony', skill: 'iron making' };
introduce(tony);
// 타입가드를 이용하여 범위를 좁히지 않는 이상 오류 

//readonly
class Developer {
    readonly name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
let john = new Deveploper("John");
john.name = "John"; // readonly err

// 이런식으로 줄일 수 있음
class Developer {
    readonly name: string;
    constructor(readonly name: string) {
    }
}

//Accessor
class Developer {
    name: string;
}

const josh = new Developer();
josh.name = 'josh Bolton';


// get과 set 활용 (get만 선언하고 set을 안하면 자동 readonly)
class Developer {
    private name: string;
    
    get name(): string {
        return this.name;
    }

    set name(newValue: string) {
        if (newValue && newValue.length > 5) {
            throw new Error('이름이 너무 깁니다');
        }
        this.name = newValue;
    }
}

const josh = new Developer();
josh.name = 'Josh Bolton'; // err
josh.name = 'Josh';

//Abstract Class 특정 클래스의 상속 대상이 되는 클래스이며 좀 더 상위 레벨에서 속성, 메서드 모양을 정의
abstract class Developer {
    abstract coding(): void;
    drink(): void {
        console.log('drink sth');
    }
}

class FrontEndDeveloper extends Deveoloer {
    coding(): void {
        console.log('develop web');
    }
    design(): void {
        console.log('design web');
    }
}

const dev = new Developer(); // err
const josh = new FrontEndDeveloper();
josh.coding(); // develop web
josh.drink(); // drink sth
josh.design(); // design web
