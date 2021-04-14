import React from 'react';

const Practice3 = () => {
  // const getTotalFee = (num: number): string => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    // return total.toString();
    return total;
  };

  // const onClickPractice = () => calcTotalFee('1,000');
  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <label>Practice: 変数の型指定</label>
      <button onClick={onClickPractice}>Exec</button>
    </div>
  );
};

export default Practice3;
