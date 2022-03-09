export {}; // 确保跟其他示例成员没有冲突

const a: Array<number> = [1,2,3];
const b: number[] = [1,2,3];

function sum(...args: number[]) {
    return args.reduce((curr, prev) => curr + prev, 0);
}
sum(1,2,3);