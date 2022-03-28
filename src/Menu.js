import styled from 'styled-components';
export default function Menu(){
    return(
        <Header>
            <h1>CINEFLEX</h1>
        </Header>
    )
}
const Header=styled.header`
    height: 13vh;width:100%;
    background-color: #C3CFD9;
    position:fixed;top:0;
    display:flex ;flex-direction:column;align-items:center;justify-content:center;
    h1{font-size: 5vh;color:#E8833A}
`