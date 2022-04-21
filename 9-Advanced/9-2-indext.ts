{
  const obj = {
    name: "ellie",
  };
  obj.name; // ellie
  obj["name"]; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  const text: Name = "hello";

  type Gender = Animal["gender"]; // 'male | 'famle'

  type Keys = keyof Animal; // keyof는 animal에 있는 모든 키를 할당한다 'name' | 'age' | 'gender'

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "ellie",
    gender: "female",
  };
}
