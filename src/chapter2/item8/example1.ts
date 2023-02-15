interface Person {
  first: string;
  last: string;
}

// TS에서 구조분해 할당을 함수 단위에서 사용하는 방법
function getEmail({person, subject, body}: {person: Person, subject: string, body: string}): string {
    return `${person.first}+${person.last}`;
}
