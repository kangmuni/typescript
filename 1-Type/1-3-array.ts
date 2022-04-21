{
  // Array
  const fruits: string[] = ["🦩", "🦜"];
  // const scores: number[] = [1, 2, 3, 4];
  const scores: Array<number> = [1, 2, 3, 4];

  function printArray(fruits: readonly string[]) {}
  // read only는 이 방식으로 사용해야 함

  //  Tuple(권장하지는 않음) -> interface, type alias, class
  let student: [string, number];
  student = ["name", 34];
  student[0]; // name
  student[1]; // 34
  const [name, age] = student;
}
