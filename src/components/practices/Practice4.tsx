import React from 'react';

const Practice4 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <label>Practice: tsconfig.json</label>
      <button onClick={onClickPractice}>Exec</button>
    </div>
  );
};

export default Practice4;
