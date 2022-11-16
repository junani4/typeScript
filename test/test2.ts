// function sum(a,b) {
//     return a + b;
// }

function sum(a: number, b: number) {
    return a + b;
}

sum (10, 20);
// sum(10, 20, 30); err too many parameters
// sum(10); err too few parameters

function sum1(a: number, b?: number) { // b? 를 해주면 few일때 에러 없음
    return a + b;
}

sum1(10);

function sum2(a: number, b = '100'): number {
    return a + b;
}
sum2(10, undefined); //110
sum2(10); //110

// Rest 문법이 적용된 매개변수
// function sum4(a: number, ...nums: number[]): number {
//     const totalOfNums = 0;
//     for (let key in nums) {
//         totalOfNums += nums[key];
//     }
//     return a + totalOfNums;
// }

// this가 잘못 사용되었을 때 감지할 수 있습니다.

interface Vue {
    el: string;
    count: number;
    init(this: Vue): () => {};
}

let vm: Vue = {
    el: '#app',
    count: 10,
    init: function(this: Vue) {
        return () => {
            return this.count;
        }
    }
}

let getCount = vm.init();
let count = getCount();
console.log(count); // 10

// 콜백에서의 this
interface UIElement {
    // this: void 타입 선언 할 필요 없음
    addClickListener(onclick: (this: void, e: Event)=> void): void;
}

// class Handler {
//     info: string;
//     onClick(this: Handler, e: Event) {
//         // UIElement 인터페이스에서 this가 필요없다고 했는데 사용해서 에러
//         this.info = e.message;
//     }
// }
// let handler = new Handler();
// uiElement.addClickListener(handler.onClick); // err!

class Handler {
    info: string;
    onClick(this: void, e: Event) {
        console.log('clicked!');
    }
}

let handler = new Handler();
uiElement.addClickListener(handler.onClick);