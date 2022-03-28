import { useEffect,useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
export default function Sessao(){
    const {idSessao}=useParams()
    const [assentos,setAssentos]=useState([])
    console.log('oi');
    useEffect(()=>{
        const promessa=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promessa.then((resposta)=>{console.log(resposta.data)})
    },[])
    return(
        
            <>
        <Main>
            <div><h1>Selecione o(s) assento(s)</h1></div>
            <ul>
                {}
            </ul>
        </Main>
        <Footer>

        </Footer>
    </> 
        
    )
}
const Main=styled.main``

const Footer=styled.footer``