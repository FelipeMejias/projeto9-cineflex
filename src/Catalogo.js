import {useEffect} from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Cartaz from './Cartaz'
export default function Catalogo(){
    const [lista,setLista]=useState([])
    useEffect(()=>{
        const promessa=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies`)
        promessa.then((resposta)=>{setLista(resposta.data)})
    },[])
    return(
        <Main>
            <div><h1>Selecione o filme</h1></div>
            <ul>
                {lista.map(cartaz=>{return <Cartaz key={cartaz.id} imagem={cartaz.posterURL} id={cartaz.id} />})}
            </ul>
        </Main>
    )
}
const Main=styled.main`
     heigth:100%; width:100%; display:flex ;flex-direction:column;align-items:center; overflow:hidden; overflow-y:scroll;
     ul{display:flex;flex-direction:row;flex-wrap:wrap;width:90vw;heigth:100%;justify-content:center}
     div{display:flex;justify-content:center;align-items:center;height:15vh;}
     h1{font-size:3vh}
`