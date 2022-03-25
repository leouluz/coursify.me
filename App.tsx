import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './src/global/theme'
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Routes />
    </ThemeProvider>
  );
}
