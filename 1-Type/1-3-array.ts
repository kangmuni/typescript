{
  // Array
  const fruits: string[] = ["๐ฆฉ", "๐ฆ"];
  // const scores: number[] = [1, 2, 3, 4];
  const scores: Array<number> = [1, 2, 3, 4];

  function printArray(fruits: readonly string[]) {}
  // read only๋ ์ด ๋ฐฉ์์ผ๋ก ์ฌ์ฉํด์ผ ํจ

  //  Tuple(๊ถ์ฅํ์ง๋ ์์) -> interface, type alias, class
  let student: [string, number];
  student = ["name", 34];
  student[0]; // name
  student[1]; // 34
  const [name, age] = student;
}
