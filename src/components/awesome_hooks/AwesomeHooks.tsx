import React, { VFC } from 'react';

import UseTimeout from './UseTimeout';
import UsePrevious from './UsePrevious';

const AwesomeHooks: VFC = () => {
  return (
    <>
      <UseTimeout />
      <UsePrevious />
    </>
  );
};

export default AwesomeHooks;
