import React from 'react';

const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  // const onClickPractice = () => calcTotalFee('1,000');
  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <label>Practice: 引数の型指定</label>
      <button onClick={onClickPractice}>Exec</button>
    </div>
  );
};

export default Practice1;
