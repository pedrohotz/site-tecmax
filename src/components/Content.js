
import {useState } from "react";
import styled from "styled-components";
import { SliderImgData } from "./imgslider";
import {FaHospital} from "react-icons/fa";
import { BsFillLightningFill,BsFillPersonFill} from 'react-icons/bs';
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io';
import {GrClose} from 'react-icons/gr';
import imgespecial from '../img/imgespecial.png';
import WhatsApp from '../img/WhatsApp.png';
import Mail from '../img/Mail.png';
import ReactModal from "react-modal";

export default function Content(){
    
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            background: '#333333',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50px',
            width: '1000px',
            height: '600px',
            display:'flex',
            justifyContent: 'center',
        },
        overlay: {zIndex: 3},
      };
    
    const [currentImg, setCurrentImg] = useState(0);
    const [isOpenWpp,setIsopenWpp] = useState(false);
    const [name,setName] = useState('');
    const [message,setMessage] = useState('');
    ReactModal.setAppElement(document.getElementById('root'))
    const length = SliderImgData.length;
    function nextSlide(){
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
        
    }
    function prevSlide(){
        setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
    }

    function FecharModal(){
        setIsopenWpp(false);
    }
    function AbrirModalWpp(){
        setIsopenWpp(true);
    }
    function enviarWpp(event){
        event.preventDefault();
       const mensagem= encodeURIComponent(`Nome: ${name}\n${message}`);
        window.location.href = `https://wa.me/5532984878558?text=${mensagem}`
        setMessage('');
        setName('');
        setIsopenWpp(false);
    }

    return(
    <Container>
            <ReactModal
                isOpen={isOpenWpp}
                onRequestClose={FecharModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                    <BoxModal>
                            <div className="title-modal">
                                <h1>Digite seu nome e a mensagem que deseja enviar</h1>
                                <GrClose className="icon-close" onClick={FecharModal}/>
                            </div>
                            <div className="content-modal">
                                <form onSubmit={enviarWpp}>
                                    <div className="label">
                                        <label>Nome:</label>
                                        <input type="text" placeholder="Digite seu nome..." value={name} onChange={(event)=> setName(event.target.value)} required></input>
                                    </div>
                                    <div className="label">
                                        <label>Mensagem:</label>
                                        <textarea type="text" placeholder="Digite sua mensagem..." value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>
                                    </div>
                                    <button type="submit">Enviar</button>
                                </form>
                            </div>
                    </BoxModal>
            </ReactModal>
        <ContainerSlider id="top">
            <Slider>
                <div className="mask" onClick={prevSlide}>
                    <IoIosArrowBack className="left"  />
                </div>
                <div className="mask-right" onClick={nextSlide}>
                    <IoIosArrowForward className="right"/>
                </div>
                {SliderImgData.map((img,index)=> {
                    return(
                        <div className={index === currentImg ? "slide active" : "slide"} key={index}>
                            {index === currentImg && (<img src={img.img} alt="img-slider" className="image-slider"></img>)}
                        </div>          
                    )
                } )}
            </Slider>
        </ContainerSlider>
        <h1 className="title" id="service">SERVIÇOS</h1>
        <BoxServices >    
            <Service>   
                <div className="face1">
                        <h1>SPDA</h1>
                        <BsFillLightningFill className="icon"/>
                </div>
                <div className="face2">
                        <h2>Projeto, execução e Laudos de inspeção do Sistema de Proteção contra Descargas Atmosféricas – SPDA.	</h2>
                </div>
            </Service>
            <Service>
                <div className="face1">
                    <h1>Projetos Hospitalares</h1>
                    <FaHospital className="icon"/>
                </div>
                <div className="face2">
                    <h2>Projetos e instalações elétricas industriais e hospitalares, consultorias.</h2>
                </div>
            </Service>
            <Service>
                <div className="face1">
                    <h1>Consultorias</h1>
                    <BsFillPersonFill className="icon"/>
                </div>
                <div className="face2">
                    <h2>Estudos e viabilidades de projetos de Energia Solar Fotovoltaica, Ar condicionado, tarifação Horo Sazonal e geradores.</h2>
                </div>
            </Service>
        </BoxServices>
        <h1 className="title">SERVIÇOS ESPECIALIZADOS</h1>
        <BoxServices>
            <div className="box">
                <div className="especial">
                    <h1>PROJETO, EXECUÇÃO E LAUDOS DE INSPEÇÃO DO SISTEMA DE PROTEÇÃO CONTRA DESCARGAS ATMOSFÉRICAS – SPDA.</h1>
                    <img src={imgespecial} alt="especial"/>
                    <h2>Clientes: Esdeva Gráfica, Centro de Ensino Superio de JF – CES, Shopping Alameda, Pedra Sul Mineração, Natura Cosméticos, APA Confecções - Leopoldina , Edifício Parque Independência, Edifício Belmiro Braga, CES Estrela Sul, Água Mineral Sierra JF, Santa Casa de Juiz de Fora, Hospital do Coração, Usina Hidrelétrica de Sobragi, Becton e Dickinson - BD, 
                    </h2>
                </div>
                <div className="especial">
                    <h1>PROJETO, EXECUÇÃO E LAUDOS DE INSPEÇÃO DO SISTEMA DE PROTEÇÃO CONTRA DESCARGAS ATMOSFÉRICAS – SPDA.</h1>
                    <img src={imgespecial} alt="especial"/>
                    <h2>Clientes: Esdeva Gráfica, Centro de Ensino Superio de JF – CES, Shopping Alameda, Pedra Sul Mineração, Natura Cosméticos, APA Confecções - Leopoldina , Edifício Parque Independência, Edifício Belmiro Braga, CES Estrela Sul, Água Mineral Sierra JF, Santa Casa de Juiz de Fora, Hospital do Coração, Usina Hidrelétrica de Sobragi, Becton e Dickinson - BD, 
                    </h2>
                </div>
                <div className="especial">
                    <h1>PROJETO, EXECUÇÃO E LAUDOS DE INSPEÇÃO DO SISTEMA DE PROTEÇÃO CONTRA DESCARGAS ATMOSFÉRICAS – SPDA.</h1>
                    <img src={imgespecial} alt="especial"/>
                    <h2>Clientes: Esdeva Gráfica, Centro de Ensino Superio de JF – CES, Shopping Alameda, Pedra Sul Mineração, Natura Cosméticos, APA Confecções - Leopoldina , Edifício Parque Independência, Edifício Belmiro Braga, CES Estrela Sul, Água Mineral Sierra JF, Santa Casa de Juiz de Fora, Hospital do Coração, Usina Hidrelétrica de Sobragi, Becton e Dickinson - BD, 
                    </h2>
                </div>
            </div>
        </BoxServices>
        <h1 className="title" id="aboutus">SOBRE NÓS</h1>
        <BoxServices >
            <div className="about">
                <h1>A Tecmax</h1>
                <h2>A <strong>TECMAX INSTALAÇÕES ELÉTRICAS E TELECOMUNICAÇÕES LTDA.</strong> é uma empresa de engenharia elétrica de Juiz de Fora MG, neste ano completa 20 anos de mercado, onde atua nas áreas de Consultoria, Diagnósticos, laudos e Inspeções e Execuções de Instalações Elétricas, Projeto e execução de Subestações e padrões de medição Cemig, Laudos e Inspeções em Sistemas de Proteção contra descargas atmosféricas – SPDA, Projeto e execução de redes de Computadores, sendo especialista nas normas NBR 5410:2005, NBR 5419:2015 e Portaria 51/2014 INMETRO: Certificação de Instalações Elétricas</h2>
            <div className="box-box">
                <div className="box-people">
                    <div className="content-people">
                        <h1>Max Bronzato</h1>
                        <h2>
                        Formado pela UFJF , o Eng. Eletricista Max Bronzato trabalhou inicialmente em concessionária de energia onde se especializou em Eng. de Segurança do trabalho, na área de ``Equipamentos Elétricos em Atmosferas Explosivas``. É consultor em Segurança das instalações elétricas, tendo ministrado vários cursos na área da NR10. Mestrado em engenharia pela Universidade Católica de Petrópolis, desenvolveu trabalho na área de Certificação das instalações elétricas. Atualmente ocupa o cargo de Engenheiro Eletricista na Universidade Federal de Juiz de Fora UFJF onde trabalhou nos projetos e fiscalização das obras de expansão da universidade.</h2>
                    </div>
                </div>
                <div className="box-people">
                    <div className="content-people">
                        <h1>Max Bronzato</h1>
                        <h2>
                        Formado pela UFJF , o Eng. Eletricista Max Bronzato trabalhou inicialmente em concessionária de energia onde se especializou em Eng. de Segurança do trabalho, na área de ``Equipamentos Elétricos em Atmosferas Explosivas``. É consultor em Segurança das instalações elétricas, tendo ministrado vários cursos na área da NR10. Mestrado em engenharia pela Universidade Católica de Petrópolis, desenvolveu trabalho na área de Certificação das instalações elétricas. Atualmente ocupa o cargo de Engenheiro Eletricista na Universidade Federal de Juiz de Fora UFJF onde trabalhou nos projetos e fiscalização das obras de expansão da universidade.</h2>
                    </div>
                </div>
                
            </div>
        </div>
        </BoxServices>
        <h1 className="title">CONTATO</h1>
        <BoxServices>
            <div className="contact">
                <h1>De que forma gostaria de entrar em contato?</h1>
                <div className="contact-box">
                    <div className="info">
                        <h1>Nos envie uma mensagem por WhatsApp</h1>
                        <img src={WhatsApp} alt="logo-wpp"></img>
                        <button onClick={AbrirModalWpp}>Enviar</button>
                    </div>
                    <div className="info">
                        <h1>Nos envie um Email</h1>
                        <img src={Mail} alt="logo-mail"></img>
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
        </BoxServices>
    </Container>
    );
}
const BoxModal = styled.div`
display: flex;
flex-direction: column;
width: 100%;
    .title-modal{
        display: flex;
        align-items: center;
        justify-content: center;
        .icon-close{
            cursor: pointer;
            background-color: #FFFFFF;
            border-radius: 30px;
            padding: 2px;
            font-size: 20px;
            margin-left: 60px;
        }
    }
    .content-modal{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height:100%;
        .label{
            margin-top: 60px;
            display: flex;
            flex-direction: column;
            font-size: 30px;
        }
    }
    h1{
        font-family: 'Poppins',sans-serif;
        font-size: 30px;
        color: #FFFFFF;
    }
    input{
        width: 600px;
        border: none;
        height: 40px;
        font-size: 20px;
        border-radius: 10px;
        margin-top: 10px;
        ::placeholder{
            font-family: 'Lato',sans-serif;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    textarea{
        margin-top: 10px;
        border-radius: 10px;
        width: 600px;
        font-size: 20px;
        height: 100px;
        ::placeholder{
            font-family: 'Lato',sans-serif;
        }
    }
    label{
        font-family: 'Lato',sans-serif;
        color:#FFFFFF;  
    }
    button{
        align-self: center;
        margin-top: 90px;
        width: 300px;
        height: 40px;
        border-radius: 30px;
        border: none;
        background-color: #43CD80;
        cursor: pointer;
        font-size: 25px;
        color: #FFFFFF;
        :hover{
            filter: brightness(1.1);
        }
}
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    .title{
        font-weight: bold;
        box-shadow: 4px 4px 10px #696969;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto',sans-serif;
        text-align: center;
        background-color: #CDC9C9;
        font-size: 40px;
    }
`
const Service = styled.div`
    box-shadow: 5px 5px 5px #696969;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    background-color: #373737;
    padding: 10px;
    width: 250px;
    border: 1px solid black;
    height: 350px;
    transform-style: preserve-3d;
    transition: transform 1s;
    :hover{ 
        transform: rotateY(180deg) scale(1.1);
    }

    .face1{
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        backface-visibility: hidden;
    }
    .face2{
        transform: rotateY(180deg);
    }
    :nth-child(1){
        margin-right: 100px;
    }
    :nth-child(2){
        margin-right: 100px;
    }
    h1{
        font-family: 'Poppins',sans-serif;
        text-align: center;
        font-size: 30px;
        color: #FFFFFF;
        text-shadow:2px 4px 4px #000000;
    }
    h2{
        font-family: 'Lato',sans-serif;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;
        text-shadow:2px 4px 4px #000000;
    }
    .icon{
        background-color: #FFFFFF;
        border-radius: 50%;
        border: 1px solid black;
        box-shadow: 2px 2px 8px black;
        width: 100px;
        height: 100px;

    }
`
const BoxServices = styled.div`
padding: 50px;
font-family: 'Roboto',sans-serif;
margin-top: 30px;
display: flex;
margin-bottom: 30px;
align-items: center;
justify-content: center;
    .contact{
        width: 80vw;
        h1{
            font-family: 'Poppins',sans-serif;
            font-size: 35px;
            text-align: start;
        }
        .contact-box{
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
        }
        .info {
            border-radius: 10px;
            background-color: #EEE9E9;
            padding: 10px;
            width: 35vw;
            height: 500px;
            display: flex;
            flex-direction: column; 
            align-items: center;
            justify-content: space-around;
            h1{
                font-family: 'Lato',sans-serif;
                font-size: 25px;
            }
            img{
                width: 400px;
                height: 200px;
            }
            button{
                width: 200px;
                height: 40px;
                border: none;
                border-radius: 30px;
                cursor: pointer;
                background-color: #41C452;
                font-size: 20px;
                color: #FFFFFF;
                font-family: 'Lato',sans-serif;
                :hover{
                    filter: brightness(1.2);
                }
            }
        }
    }

    .about{ 
        display: flex;
        flex-direction: column;
        width: 80vw;
        .box-box{
            display: flex;
            justify-content:space-around;
        }
        .box-people{
            border-radius: 20px;
            background-color: #373737;
            color: #FFFFFF;
            padding: 20px;
            margin-top: 60px;
            text-shadow:2px 4px 4px #000000;
            text-align: center;
            width: 30vw;
            height: 600px;
            border: 1px solid grey;
            line-height: 30px;
            transition: 0.5s;
            box-shadow: 5px 5px 5px #696969;
            h1{
                text-align: center;
                font-size: 25px;
            }

            :hover{
                transform: scale(1.1);
            }
        }
        h1{
            font-family: 'Poppins',sans-serif;
            font-size: 50px;
            text-align: start;
        }
        h2{
            margin-top: 20px;
            font-family: 'Roboto',sans-serif;
            font-size: 20px;
            line-height: 25px;
        }
    }

.box{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 500px;
}
.especial {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 400px;
    height: 100%;
    margin-left: 30px;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
    h1{
        font-weight: bold;
        font-family: 'Poppins',sans-serif;
        font-size: 20px;
    }
    h2{
        font-family: 'Roboto',sans-serif;
    }
    :hover{
        background-color: #696969;
        transform: scale(1.1);
    }
}
`

const ContainerSlider = styled.div`
width: 100vw;
overflow: hidden;
display: flex;
justify-content: center;
max-width:100%;
margin-top: 90px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`

const Slider = styled.div`
    position: relative;
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    .mask{
        cursor: pointer;
        position: absolute;
        left: 0;
        width: 100px;
        height: 100vh;
        z-index: 1;
        transition: 0.5s;
        :hover{
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
    .mask-right{
        cursor: pointer;
        position: absolute;
        right: 0;
        width: 100px;
        height: 100vh;
        z-index: 1;
        transition: 0.5s;
        :hover{
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
    .image-slider{
        width: 100vw;
        height: 900px;
       
    }
    .left{
        color: #D3D3D3;
        font-size: 50px;
        top: 50%;
        left: 30px;
        position: absolute;
        cursor: pointer;
    }
    .right{
        color: #D3D3D3;
        font-size: 50px;
        z-index: 1;
        position: absolute;
        right: 20px;
        top: 50%;
        cursor: pointer;
    }
    .slide {
        opacity: 0;
        transition-duration: 1s ease;
    }
    .slide.active{
        margin-top: 20px;
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.08);
    }
`