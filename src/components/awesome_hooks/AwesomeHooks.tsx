import React, { VFC } from 'react';

import UseTimeout from './UseTimeout';
import UsePrevious from './UsePrevious';
import UseClickInside from './UseClickInside';
import UseClickOutside from './UseClickOutside';

const AwesomeHooks: VFC = () => {
  return (
    <>
      <UseTimeout />
      <UsePrevious />
      <UseClickInside />
      <UseClickOutside />
    </>
  );
};

export default AwesomeHooks;
