export {}; // 确保跟其他示例成员没有冲突

function func1(a: number, b: number, ...rest:number[]): string {
    return 'func1';
}
func1(1, 2, 3);

const func2: (a: number, b: number) => number = function (a: number, b: number): number {
    return a + b;
}