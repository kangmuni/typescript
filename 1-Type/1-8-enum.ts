{
  // Enum

  // JavaScript
  const MAX_NUM = 5;
  const MAX_STUDENTS_PER_CLASS = 80;
  const MONDAY = 0;
  const TUSEDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUSEDAY: 1, WEDNESDAY: 2 });
  const datOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum DAYS {
    Monday = "mon",
    Tuesday = "tue",
    Wednesday = "wed",
    Thursday = "thu",
    Friday = "fri",
    Saturday = "sat",
    Sunday = "sun",
    // 이렇게 할당안하면 0부터 시작, 만약 Monday를 1로 할당 했으면 1부터 시작
  }
  console.log(DAYS.Monday);
  const day = DAYS.Saturday;
  //   let day: DAYS = DAYS.Saturday;
  //   day = 10;
  //   @@ enum의 문제점 @@
  console.log(day);

  type DaysOfWeek = "Monday" | "Saturday" | "Sunday";
  let dayOfWeek: DaysOfWeek = "Saturday";
  dayOfWeek = "Monday";
  // enum을 사용하지 않고 union 타입으로 대체해서 사용이 가능하고 더 안전하다!!
}
