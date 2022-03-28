import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Catalogo from './Catalogo'
import Filme from './Filme'
import Sessao from './Sessao'
import Sucesso from './Sucesso'
import Menu from './Menu'
import './reset.css'
import { useState } from 'react'

function App(){
    const [reserva,setReserva]=useState({})
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Catalogo />}></Route>
                <Route path='/filme/:idFilme' element={<Filme />}></Route>
                <Route path='/sessao/:idSessao' element={<Sessao setReserva={setReserva} />}></Route>
                <Route path='/sucesso' element={<Sucesso reserva={reserva}/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />,document.querySelector('.root'))