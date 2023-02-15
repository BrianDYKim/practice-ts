interface Item9Person {
  name: string;
}

const examplePeople = ['Alice', 'Bob', 'jane'];

// 타입 단언 방식의 map
const item9People1 = examplePeople.map((name) => ({ name } as Item9Person));
// 타입 선언 방식의 map
const item9People2: Item9Person[] = examplePeople.map(
  (name: string): Item9Person => ({ name })
); // map 내부에 화살표 함수를 사용하여, 매개변수의 타입, 반환형의 타입을 명시하여 타입 선언 방식으로 map을 적용할 수 있다


