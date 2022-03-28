import { useEffect,useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
export default function Sessao({setReserva}){
    const {idSessao}=useParams()
    const [assentos,setAssentos]=useState([])
    const [dados,setDados]=useState([])
    const [selecionados,setSelecionados]=useState([])
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [numeros,setNumeros]=useState([])
    useEffect(()=>{
        const promessa=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promessa.then((resposta)=>{setAssentos(resposta.data.seats);setDados(resposta.data);setFooter(<>
            <img src={resposta.data.movie.posterURL}></img>
            <div><h1>{resposta.data.movie.title}</h1><h1>{resposta.data.day.date} - {resposta.data.name}</h1></div>
            </>
        )})
    },[])
    function selecionar(id,numero){
        setSelecionados([...selecionados,id])
        setNumeros([...numeros,numero])
    }
    function desSelecionar(id,numero){
        const novoSelecionados=[]
        for(let i=0;i<selecionados.length;i++){
            if(selecionados[i]!=id){novoSelecionados.push(selecionados[i])}
        }
        setSelecionados(novoSelecionados)
        const novoNumerosSelecionados=[]
        for(let i=0;i<numeros.length;i++){
            if(numeros[i]!=numero){novoNumerosSelecionados.push(numeros[i])}
        }
        setNumeros(novoNumerosSelecionados)
    }
    function postar(){
        const promessaPost=axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',{
            ids:numeros,name:nome,cpf:cpf
        })
        promessaPost.then()
    }
    const [footer,setFooter]=useState('')
    return(
        
            <>
        <Main>
            <div className='margem'><h1>Selecione o(s) assento(s)</h1></div>
            <ul>
                {assentos.map(lugar=>{
                    if(selecionados.includes(lugar.id)){return <Bolinha onClick={()=>desSelecionar(lugar.id,lugar.name)} className="verde">{lugar.name}</Bolinha>}
                    else{return <Bolinha onClick={()=>{
                        
                                if(assentos[lugar.name-1].isAvailable){selecionar(lugar.id,lugar.name)}
                            
                        
                        
                    }} className={lugar.isAvailable ? 'cinza' : 'amarelo'}>{lugar.name}</Bolinha>}
})}
            </ul>
            <span className='gabarito'>
                <div><Bolinha className="verde"></Bolinha><p>Selecionado</p></div>
                <div><Bolinha className="cinza"></Bolinha><p>Disponível</p></div>
                <div><Bolinha className="amarelo"></Bolinha><p>Indisponível</p></div>
            </span>
            <h1>Nome do comprador:</h1>
            <input placeholder="Digite seu nome..." onChange={event => setNome(event.target.value)} value={nome} />
            <h1>CPF do comprador:</h1>
            <input placeholder="Digite seu CPF..." onChange={event => setCpf(event.target.value)} value={cpf} />
            <Link to={'/sucesso'} >
                <button onClick={()=>{postar();setReserva({
                    nomeFilme:dados.movie.title,
                    momento:`${dados.day.date} ${dados.name}`,
                    assentos:numeros,
                    nomeComprador:nome,
                    cpf:cpf
                    })}}>Reservar assento(s)</button>
            </Link>
        </Main>
        <Footer>
            {footer}
        
        </Footer>
    </> 
        
    )
}
const Main=styled.main`
display:flex;flex-direction:column;align-items:center;
.margem{margin-top:13vh}
div{display:flex;justify-content:center;align-items:center;height:7vh}
button{background-color:#E8833A;margin:4vh;width:25vh;height:5vh;border:0;border-radius:0.5vh;color:white}
ul{width:70vh;display:flex;flex-wrap:wrap;justify-content:center}
.cinza{background-color:#C3CFD9}
.amarelo{background-color:#FBE192}
.verde{background-color:#1AAE9E}
span{display:flex}
h1{margin-top:15px;margin-bottom:4px}
`

const Footer=styled.footer`
display:flex;align-items:center;position:fixed;bottom:0;
height:10vh;width:100%;background-color:#C3CFD9;
img{height:7vh;margin-left:15px;margin-right:10px}
`

const Bolinha=styled.span`
height:3vh;width:3vh;border-radius:50%;margin:2vh;display:flex;justify-content:center;align-items:center;

`