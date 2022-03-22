import React from 'react';

import { ThemeProvider } from 'styled-components';

import Home from './src/screen/Home';
import theme from './src/global/theme'
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Home />
    </ThemeProvider>
  );
}
