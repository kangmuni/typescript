{
  // number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let age: undefined; // π©
  let age2: number | undefined; // μ΄λ κ² μ¬μ©νλκ²μ΄ μ’λ€!
  age2 = undefined;
  age2 = 3;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let preson: null; // π©
  let preson2: string | null; // μλ μ΄λ κ² μ¬μ©νλκ²μ΄ μ’λ€!

  //unknown π© νμμ΄ λͺννμ§ μκΈ°μ μ¬μ©νμ§ μλκ²μ΄ μ’λ€!
  let notSure: unknown = 0;
  notSure = "string";
  notSure = 777;
  notSure = true;

  // any π© μλ λ§μ°¬κ°μ§..!
  let anything: any = 0;
  anything = "he";

  // void :  ν¨μμμ μλ¬΄κ²λ λ¦¬ν΄νμ§ μμ λ μ¬μ©!
  function print(): void {
    console.log("print");
    return;
  }
  // π© voidλ₯Ό μ μΈν΄μ μ¬μ©νλ κ²½μ°λ μμ!
  let unusable: void = undefined;

  // never : λ¦¬ν΄νλ κ°μ΄ μμκ±°μΌ!
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // π©

  // object
  let obj: object; // π© νμμ΄ λͺννμ§ μκΈ°μ μ΄κ²λ μ’μ§ μλ€!
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "muni" });
  acceptSomeObject({ amimal: "cat" });
}
