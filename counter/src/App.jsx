
import { CounterProvider } from './CounterContext'
import Counter from './Counter'
import { UseTheme } from './ThemeContext.jsx';

function App() {
  
  const { theme, toggleTheme} = UseTheme();
  return (
    <div >
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  )
}

export default App
