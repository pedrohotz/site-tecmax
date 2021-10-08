import styled from "styled-components"
import logopng from "../img/logopng.png"

export default function Topbar(){
    return(
        <Top>
            <a href="#top">
            <LinkMenu>
               <h1>HOME</h1>
            </LinkMenu>
            </a>
            <LinkMenu>
                <h1>CLIENTES</h1>
            </LinkMenu>
            <a href="#service"> 
            <LinkMenu>
                <h1>SERVIÇOS</h1>
            </LinkMenu>
            </a>
            <a href="#top"> <img src={logopng} alt="logo"></img></a>
            <a href="#aboutus"> 
            <LinkMenu>
               <h1>SOBRE NÓS</h1>
            </LinkMenu>
            </a>
            <LinkMenu>
                <h1>PROJETOS</h1>
            </LinkMenu>
            <LinkMenu>
                <h1>CONTATO</h1>
            </LinkMenu>   
        </Top>
    )
}



const Top = styled.div`
font-family: 'Lato',sans-serif;
font-weight: bold;
font-size: 15px;
width: 100vw;
position: fixed;
top: 0%;
left: 0%;
z-index: 2;
height: 90px;
background-color:#FFFFFF;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid #CDC9C9;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
a, a:visited, a:hover, a:active {
  color: inherit;
}
    img{
        margin-left: 20px;
        margin-right: 20px;
    }
`

const LinkMenu = styled.div`
    border-radius: 200px;
    margin-right: 10px;
    cursor: pointer;
    width: 120px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.6s;
    :hover{
        background-color: #DA251D;
    }
`