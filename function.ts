// const add = (a:number, b:number) => a+b

// Call Signature
type Add = (a:number, b:number) => number;

const add:Add = (a, b) => a + b
// const add:Add = (a, b) => {a + b} {} 사용하게되면 return a+b가 아니라 a+b가 되어서 리턴처리를 안해준다.

// Overloading

type Add2 = {
    (a: number, b: number) : number
    (a: number, b: string) : number
}

const add2: Add2 = (a, b) => {
    if(typeof b === "string") return a
    return a + b
}

type Config = {
    path: string,
    state: object
}

type Push = {
    (path:string):void
    (config: Config):void
}

const push:Push = (config) => {
    if(typeof config === "string") console.log(config)
    else {
        console.log(config.path, config.state)
    }
}

// 매개변수의 데이터타입이 다른 경우 예외 처리
type Add3 = {
    (a: number, b: number): number,
    (a: number, b: number, c: number): number
}
    
const add3: Add3 = (a, b, c?: number) => {
    if (c) return a + b + c;
    return a + b;
}

add3(1, 2)
add3(1, 2, 3,)