import styled from 'styled-components';
import {Link} from 'react-router-dom'
export default function Cartaz({ imagem,id}){
    return(
        <Li>
            <Link to={`/filme/${id}`}>
                <img src={imagem} />
            </Link>
        </Li>
    )
}
const Li=styled.li`
    display:flex;width:30vh;justify-content:center;align-items:center;height:26vh;
    img{height:20vh}
`