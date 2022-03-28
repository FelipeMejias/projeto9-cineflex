import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Catalogo from './Catalogo'
import Filme from './Filme'
import Sessao from './Sessao'
import Sucesso from './Sucesso'
import Menu from './Menu'
import './reset.css'

function App(){
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Catalogo />}></Route>
                <Route path='/filme/:idFilme' element={<Filme />}></Route>
                <Route path='/sessao' element={<Sessao />}></Route>
                <Route path='/sucesso' element={<Sucesso />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />,document.querySelector('.root'))