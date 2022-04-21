{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  // Partial은 부분적인것만 사용하고 싶을때 활용 할 수 있다.
  function updateTodo(todo: ToDo, fieldToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldToUpdate };
  }
  const todo: ToDo = {
    title: 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  };
  const updated = updateTodo(todo, { priority: 'low' });
  console.log(updated);
}
