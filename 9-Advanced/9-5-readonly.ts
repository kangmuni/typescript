{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // todo.title = 'java'; 누군가 수정할 수 있다. 불변성을 보장 받는것이 중요하다.
  }
}
