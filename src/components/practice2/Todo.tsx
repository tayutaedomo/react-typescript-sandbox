import React from 'react';

type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? '[x]' : '[ ]';

  return <p>{`${completeMark} ${title}(User:${userId})`}</p>;
};

export default Todo;
