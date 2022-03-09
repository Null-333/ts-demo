export {}; // 确保跟其他示例成员没有冲突

// 假定这个nums来自一个明确的接口
const nums = [110, 120, 119, 112];
const res = nums.find(num => num > 112);

const num1 = res as number;


