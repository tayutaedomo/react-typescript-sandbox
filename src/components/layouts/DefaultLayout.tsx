import React, { ReactNode, VFC } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';

const theme = createMuiTheme({});

type Props = {
  children: ReactNode;
};

const DefaultLayout: VFC<Props> = (props) => {
  const { children } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </MuiThemeProvider>
  );
};

export default DefaultLayout;
