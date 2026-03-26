import './App.css'
import Header from './header/Header'
import Cadastrar from './forms/Cadastrar'
import './index.css'
import Login from './forms/Login'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
   <div>
    <Routes>
      <Route path='/cadastrar' element={<Cadastrar/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   </div>


  )
}

export default App
