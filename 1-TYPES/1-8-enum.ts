{
  /**
   * Enum
   */
  //JavaScript에는 없어서 line 11처럼 사용
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAT = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const dayOfTday = DAYS_ENUM.MONDAY;

  //TypeScript 안쓰는게 좋음 -> 상수를 묶는 방법은 union type을 사용

  type DaysOfWeek = "Monday" | "Tuesday" | "wednesday";

  enum Days {
    Monday = 1, // 1
    Tuseday, // 2
    Wednesday, //3
    Thursday,
    Friday,
    Satarday,
    Sunday,
  }
  console.log(Days.Monday); // 0
  let day: Days = Days.Satarday;
  day = 1000; // 이렇게 타입이 정확하게 보장되지 않음
  console.log(day); // 6
  let daysOfWeek: DaysOfWeek = "Monday";
  daysOfWeek = "Tuesday";
}
