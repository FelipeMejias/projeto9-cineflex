import styled from 'styled-components'
import {Link} from 'react-router-dom'
export default function Sucesso({reserva}){
    return(
        <Main>
            <div className='margem'><h2>Pedido feito com sucesso!</h2></div>
            <article>
                <h1>Filme e sessão:</h1>
                <p>{reserva.nomeFilme}</p>
                <p>{reserva.momento}</p>
                <h1>Ingressos:</h1>
                {reserva.assentos.map((x)=><p>Assento {`${x}`}</p>)}
                <h1>Comprador:</h1>
                <p>{reserva.nomeComprador}</p>
                <p>{reserva.cpf}</p>
            </article>
            <Link to='/'><button>Voltar para Home</button></Link>
        </Main>
    )
}
const Main=styled.main`
display:flex;flex-direction:column;align-items:center;
.margem{margin-top:13vh}
article{margin-left:8vh}
div{display:flex;justify-content:center;align-items:center;height:7vh;}
h2{font-size:24px;color:green;font-weight:700}
h1{font-size:24px;font-weight:700;margin-top:15px}
p{font-size:22px;font-weight:400}
button{background-color:#E8833A;margin:4vh;width:25vh;height:5vh;border:0;border-radius:0.5vh;color:white}
`