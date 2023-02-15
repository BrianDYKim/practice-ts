/**
 * 타입스크립트에서는 타입은 명확한 상속관계가 아닌 경우에는 부분집합의 개념으로 접근하는게 더욱 바람직하다
 */
interface Point {
  x: number;
  y: number;
}

type PointKeys = keyof Point; // 'x' | 'y'

function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  return vals;
}

const pts: Point[] = [
  { x: 1, y: 1 },
  { x: 2, y: 0 },
];
sortBy(pts, 'x');
sortBy(pts, 'y');
// sortBy(pts, 'z'); -> 'z'는 'x' | 'y' 에 속하는 원소가 아니기 때문
