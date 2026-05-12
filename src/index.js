import React from 'react';
import { createRoot } from 'react-dom/client';
import { Buffer } from 'buffer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/theme/theme';

// CRA 5 / webpack 5 dropped Node global polyfills. The AWS SDK v3 signers
// reach for `Buffer` when signing Lex requests with temp Cognito creds, so
// we expose the browser-port `buffer` shim on `window` before any SDK code runs.
if (typeof window !== 'undefined' && !window.Buffer) {
  window.Buffer = Buffer;
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
