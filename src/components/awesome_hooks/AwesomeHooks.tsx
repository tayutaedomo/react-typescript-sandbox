import React, { VFC } from 'react';

import UseTimeout from './UseTimeout';
import UsePrevious from './UsePrevious';
import UseClickInside from './UseClickInside';

const AwesomeHooks: VFC = () => {
  return (
    <>
      <UseTimeout />
      <UsePrevious />
      <UseClickInside />
    </>
  );
};

export default AwesomeHooks;
