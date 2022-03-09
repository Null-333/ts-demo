function createArray<T>(length: number, value: T): Array<T> {
    return Array<T>(length).fill(value);
}
createArray(10, 20);
createArray(10, 'helen');