import './App.css'
import Header from './header/Header'
import Cadastrar from './forms/Cadastrar'
import './index.css'
import Login from './forms/Login'
import { Routes, Route } from 'react-router-dom'
import Recepcao from './TelasProfissionais/Recepcao'
import PreAtendimento from './TelasProfissionais/PreAtendimento'
import { FilaProvider } from './context/FilaContext';
import TelaPrincipal from './telasPrincipais/TelaPrincipal'


function App() {


  return (
    <div>
      <FilaProvider>
        <Routes>
          <Route path='/cadastrar' element={<Cadastrar />} />
          <Route path='/login' element={<Login />} />
          <Route path='/recepcao' element={<Recepcao />}></Route>
          <Route path='/preAtendimento' element={<PreAtendimento />}></Route>
          <Route path='/telaPrincipal' element={<TelaPrincipal/>}></Route>
        </Routes>
      </FilaProvider>
    </div>


  )
}

export default App
