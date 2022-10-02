import './App.css';
import { GlobalStyle, ThemeProvider, Header } from '@amsterdam/asc-ui'
import TagsInput from './components/TagsInput/TagsInput';
import TagForm from './components/TagForm/TagForm';

function App() {
  
  return (
    <div className="App">
      <ThemeProvider>
        <GlobalStyle />
        
        <Header tall title="Wijken en tags" fullWidth={false} homeLink={'#'} />
        <TagForm />
        <TagsInput />
        
      </ThemeProvider>
    </div>
  );
}

export default App;
