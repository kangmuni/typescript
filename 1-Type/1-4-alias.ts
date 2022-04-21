{
  // Type alias

  type Text = string;
  const name: Text = "ellie";
  const address: Text = "Korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "muni",
    age: 29,
  };

  // String Literal Type
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";

  type Json = "json";
  const json: Json = "json";

  type Boal = true;
}
