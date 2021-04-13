import React, { useState } from 'react';
import axios from 'axios';

import Todo from './Todo';
import { TodoType } from '../../types/todo';
import Text from './Text';
import UserProfile from './UserProfile';
import { User } from '../../types/user';

const user: User = {
  name: 'Taro',
  // hobbies: ['Movie', 'Game'],
};

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
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
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
