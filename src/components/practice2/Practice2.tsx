import React, { useState } from 'react';
import axios from 'axios';

import Todo from './Todo';
import { TodoType } from '../../types/todo';

function Practice2() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div>
      <button onClick={onClickFetchData}>Fetch TODO list</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default Practice2;
