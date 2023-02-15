interface Item9Person {
  name: string;
}

const alice: Item9Person = { name: 'Alice' }; // 타입 선언 방식. 타입은 Item9Person
const bob = { name: 'Bob' } as Item9Person; // 타입 단언 방식. 타입은 Item9Person

// const alice2: Item9Person = {}; -> 타입 선언의 경우 타입스크립트가 오류를 잡아줌
const bob2 = { name: 'Bob' } as Item9Person; // 타입 단언은 타입을 강제로 지정했으니 타입 체커에게 오류를 무시하도록 강요를 하는 효과를 가짐

// 속성을 추가했을 때도 마찬가지로 적용
// const alice3: Item9Person = {
//   name: 'Alice',
//   occupation: 'Typescript Developer',
// };

const bob3 = {
  name: 'Bob',
  occupation: 'Javascript Developer',
} as Item9Person; // 타입 단언의 경우 타입 체커가 타입 오류를 무시한다


