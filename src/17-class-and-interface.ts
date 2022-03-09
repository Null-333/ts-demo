export {}; // 确保跟其他示例成员没有冲突

interface EatAndRun {
    eat(food: string): void;
    run(instance: string): void;
}

class Person implements EatAndRun {
    eat(food: string) {
        console.log('优雅的进餐', food);
    }
    run(instance: string) {
        console.log('直立行走', instance);
    }
}
class Animal implements EatAndRun {
    eat(food: string) {
        console.log('呼噜呼噜得吃', food);
    }
    run(instance: string) {
        console.log('爬行', instance);
    }
}
