import React from 'react';
import './App.css';
import { Button, GlobalStyle, Tag, ThemeProvider, TextField } from '@amsterdam/asc-ui'
import Tags from './components/Tags/Tags';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <GlobalStyle />
        <Tags />
      </ThemeProvider>
    </div>
  );
}

export default App;
