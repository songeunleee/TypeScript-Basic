{
  /**
   * InterSection Types: & union과 완전히 반대
   */
  type Student = {
    name: string;
    score: number;
  };
  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({ name: "ellie", score: 1, empolyeeId: 123, work: () => {} });
}
