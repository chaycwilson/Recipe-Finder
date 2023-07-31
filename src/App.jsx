import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import ItemsInput from './Components/ItemsInput/ItemsInput';
import About from './Components/About/About';


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
   
    <div className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <About theme={theme}/>
      <ItemsInput theme={theme}/>
    </div>
      
    
  )
}

export default App
