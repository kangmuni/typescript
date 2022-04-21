{
  // Intersection Types: &

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function interWork(person: Student & Worker) {
    console.log(person.name, person.score, person.employeeId, person.work());
  }

  interWork({
    name: "muni",
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}
