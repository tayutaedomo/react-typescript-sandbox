import React, { VFC } from 'react';

import { TodoType } from '../../types/todo';

//const Todo = (props: Pick<TodoType, 'userId' | 'title' | 'completed'>) => {
const Todo: VFC<Omit<TodoType, 'id'>> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? '[x]' : '[ ]';

  return <p>{`${completeMark} ${title}(User:${userId})`}</p>;
};

export default Todo;
