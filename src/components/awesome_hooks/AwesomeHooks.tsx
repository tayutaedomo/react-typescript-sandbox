import React, { VFC } from 'react';
import { Grid } from '@material-ui/core';

import UseTimeout from './UseTimeout';
import UsePrevious from './UsePrevious';
import UseClickInside from './UseClickInside';
import UseClickOutside from './UseClickOutside';
import UseFetch from './UseFetch';
import UseInterval from './UseInterval';

const AwesomeHooks: VFC = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <UseTimeout />
        </Grid>
        <Grid item xs={6}>
          <UsePrevious />
        </Grid>
        <Grid item xs={6}>
          <UseClickInside />
        </Grid>
        <Grid item xs={6}>
          <UseClickOutside />
        </Grid>
        <Grid item xs={6}>
          <UseFetch />
        </Grid>
        <Grid item xs={6}>
          <UseInterval />
        </Grid>
      </Grid>
    </>
  );
};

export default AwesomeHooks;
