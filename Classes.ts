abstract class User {
    constructor(
        protected firstName:string, // private 선언한 클래스에서만
        protected lastName:string, // protected 선언, 상속받은 클래스에서만
        protected nickname:string // public 선언,상속,인스턴스
    ) {}
    abstract getNickName():void

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Player extends User {
    getNickName() {
        console.log(this.nickname)
    }
}

const jun = new Player("jun", "las", "준");

jun.getFullName

type Words = {
    [key: string]: string
}

class Dict {
    private words: Words
    constructor(){
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    def(term:Word){

    }
    static hello() {
        return "hello";
    }
}

class Word {
    constructor(
        public readonly term: string,
        public readonly def:string
    ) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

kimchi.def = "xxx" // 변경불가

const dict = new Dict()

dict.add(kimchi);
dict.def("kimchi")

Dict.hello
