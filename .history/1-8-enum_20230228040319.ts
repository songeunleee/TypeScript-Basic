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

  //TypeScript 안쓰는게 좋음

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
  const day: Days = Days.Satarday;
  console.log(day); // 6
}
