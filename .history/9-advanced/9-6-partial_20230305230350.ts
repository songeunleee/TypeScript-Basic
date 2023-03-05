{
  type ToDo = {
    title: string;
    description: string;
    label:string;
    priority: 'high'|'low';
  };

  function updateTodo(todo:ToDo, fieldsToupdate: Partial<ToDo>):ToDo{
    retrun{...todo, ...fieldsToupdate};
  }
}
