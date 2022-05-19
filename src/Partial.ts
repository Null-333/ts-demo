// type Module = {
//     pre: '';
//     create: '';
//     update: '';
// };
type Module = Partial<{
    pre: string;
    create: string;
    update: string;
}>;

const module: Module = {
    pre: '',
};

// 使用Partial转换之后
// type Module = {
//     pre?: string | undefined;
//     create?: string | undefined;
//     update?: string | undefined;
// };


