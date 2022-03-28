import {useParams,Link} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
export default function Filme(){
    const {idFilme}=useParams()
    const [dias,setDias]=useState([])
    const [dados,setDados]=useState([])
    useEffect(()=>{
        const promessa=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        promessa.then(resposta=>{setDias(resposta.data.days);setDados(resposta.data)})
    },[])
    return(
    <>
        <Main>
            <div><h1>Selecione a sessão</h1></div>
            <ul className="lista-dias">
                {dias.map((dado)=>{return (<>
                <h1>{dado.date}-{dado.weekday}</h1>
                <ul>{dado.showtimes.map(sessao=><Link to={`/sessao/${sessao.id}`}><button>{sessao.name}</button></Link>)}</ul></>
                 )   }  )  }
            </ul>
        </Main>
        <Footer>
        <img src={dados.posterURL} />
            <h1>{dados.title}</h1>
        </Footer>
    </> 
    )
}
const Main=styled.main`
margin-left:8vh;
div{display:flex;justify-content:center;align-items:center;height:15vh;}
button{background-color:#E8833A;margin:4vh;width:9vh;height:4vh;
border:0;border-radius:0.5vh;color:white}
.lista-dias{margin-bottom:13vh}
`

const Footer=styled.footer`
display:flex;align-items:center;position:fixed;bottom:0;
height:10vh;width:100%;background-color:#C3CFD9;
img{height:7vh;margin-left:15px;margin-right:10px}
`