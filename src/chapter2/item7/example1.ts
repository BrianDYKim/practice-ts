// TypeScript에서 enum을 효율적으로 사용하는 방법
const temp = ['a', 'b', 'c'] as const;

type FooType = typeof temp[keyof typeof temp];

const foo: FooType = 'a'; // 정상
// const bar: FooType = 'd'; // 비정상