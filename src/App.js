import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Character from './components/Character';
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value='red'>
        <Header />
        <Character />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
