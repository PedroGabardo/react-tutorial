import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ThemeToggleButton from './components/ThemeToggleButton'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/home'
import Sobre from './pages/sobre'

function App() {


  return (
   <ThemeProvider>
      <browserRouter>
        <div>
          <nav>
            <ul><Link to="/">Home</Link></ul>
            <ul><Link to="sobre">Sobre</Link></ul>
          </nav>
          <ThemeToggleButton />
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
          </Routes>
        </div>
      </browserRouter>
   </ThemeProvider>
  )
}

export default App
