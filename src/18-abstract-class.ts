abstract class Animal {
    eat(food: string) {
        console.log('呼噜呼噜得吃', food);
    }
    abstract run (distance: number): void
}

class Dog extends Animal {
    run(distance: number): void {
        console.log('爬行', distance);
    }
}
