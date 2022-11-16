type Team = "read" | "blue" | "yellow" // string
type Health = 1 | 5 | 10 // number
//타입은 뭐든 가능 

interface Player2 { //인터페이스는 오브젝트의 모양 1. type(키워드가 더 많음) 2. interface
    nickname: string,
    health: Health,
    team: Team
}

const jun2 : Player2 = {
    nickname: "jun2",
    team: "yellow",
    health: 10
}

type Food = string;

const kimchi2:Food = "delicious";


interface User {
    name: string
}

interface Player3 extends User {

}

const kim : Player3 = {
    name: "kim"
}

//

interface User {
    firstName:string,
    lastName:string,
    sayHi(name:string):string
    fullName():string
}

interface Human {
    health:number
}

class Player implements User, Human {
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number
    ){}
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
        return `Hello ${name} My name is ${this.fullName()}`
    }
}

function makeUser(user: User): User {
    return {
    firstName:"nico",
    lastName:"las",
    fullName: () => "xx",
    sayHi: (name) => "string"
}
}

makeUser({
    firstName:"nico",
    lastName:"las",
    fullName: () => "xx",
    sayHi: (name) => "string"
})

//////////////////////
type PlayerA = {
    name:string
}
type PlayerAA = PlayerA & {
    lastName:string
}
const playerA: PlayerAA = {
    name:"nico",
    lastName:"xxx"
}

////
interface PlayerB {
    name:string
}
interface PlayerB {
    lastName:string
}
interface PlayerB {
    health:number
}
const playerB: PlayerB = {
    name:"jun",
    lastName:"sss",
    health:90
}

type PlayerC = {
    firstName:string
}

interface PlayerD {
    firstName:string
}
class User implements PlayerD {
    constructor(
        public firstName:string
    ){}
}