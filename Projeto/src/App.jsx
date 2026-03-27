import './App.css'
import Header from './header/Header'
import Cadastrar from './forms/Cadastrar'
import './index.css'
import Login from './forms/Login'
import { Routes, Route } from 'react-router-dom'
import Recepcao from './TelasProfissionais/Recepcao'
import PreAtendimento from './TelasProfissionais/PreAtendimento'

function App() {


  return (
    <div>
     
      <Routes>
        <Route path='/cadastrar' element={<Cadastrar />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <PreAtendimento/>
    </div>


  )
}

export default App
