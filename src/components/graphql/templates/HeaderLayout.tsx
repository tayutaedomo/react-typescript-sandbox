import React, { ReactNode, VFC } from 'react';
import Header from '../organisms/layout/Header';

type Props = {
  children: ReactNode;
};

const HeaderLayout: VFC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderLayout;
