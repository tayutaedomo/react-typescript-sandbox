import React from 'react';

const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    // return total.toString();
    return total;
  };

  // const onClickPractice = () => calcTotalFee('1,000');
  const onClickPractice = () => {
    console.log(getTotalFee(1000));
  };

  return (
    <div>
      <label>Practice: 返却値の型指定</label>
      <button onClick={onClickPractice}>Exec</button>
    </div>
  );
};

export default Practice2;
