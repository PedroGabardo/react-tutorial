import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ThemeToggleButton from './components/ThemeToggleButton'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/home'
import Sobre from './pages/sobre'
import Usuarios from './pages/Usuarios'
import UsuarioDetalhe from './pages/usuariodetalhe'


function App() {


  return (
   <ThemeProvider>
      <BrowserRouter>
        <div>
          <nav>
            <ul><Link to="/">Home</Link></ul>
            <ul><Link to="/sobre">Sobre</Link></ul>
            <ul><Link to="/usuarios">Usuários</Link></ul>
          </nav>
          <ThemeToggleButton />
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/usuarios" element={<Usuarios />} />

            <Route path="/usuarios/:id" element={<UsuarioDetalhe />} />

          </Routes>
        </div>
      </BrowserRouter>
   </ThemeProvider>
  )
}

export default App
