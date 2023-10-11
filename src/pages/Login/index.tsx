import React, { useState, useEffect } from 'react';
import { StyledLoginPage, LogoImage, Title, SubTitle, FormStyle, ImageWrapper, Image, InputComponent, LableStyle, FormGroup, PasswordSpan, Body, Button, CheckBoxWapper, CheckBox, SpanText, LinkDetalhes, CadastreseDiv, CadastreseText,CadastreseText2, PassowrdWrapper, HiddenLabel } from './style'
import LogoPipocaAgil from './Imgs/LogoPipocaAgil.png'
import ImagemLogin from './Imgs/ImagemLogin.png'
import { Link } from 'react-router-dom';


type LoginData = {
  email: string,
  password: string,
}

export default function Login() {
  // Estado tipado com LoginData
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });
  const [isPasswordValid, setIsPasswordValid] = useState
  (false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,12}$/;

    setIsEmailValid(emailRegex.test(formData.email));
    setIsPasswordValid(passwordRegex.test(formData.password));
  }, [formData.email, formData.password]);
 
  useEffect(() => {
    handleMobile(); // Executa a função quando o componente é montado
  
    // Adiciona um ouvinte de redimensionamento da janela para atualizar quando a tela for redimensionada
    window.addEventListener("resize", handleMobile);
  
    // Remove o ouvinte quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const styleColor = {
    color: "#B33B3B",
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isEmailValid) {
      alert('Por favor, insira um email válido.');
      return;
    }

    if (!isPasswordValid) {
      alert(
        'Por favor, insira uma senha válida. A senha deve ter entre 8 e 12 caracteres, incluindo letras, números e caracteres especiais.'
      );
      return;
    }

  };

   const handleMobile = () => {
      const windowWidth = window.innerWidth;

      if(windowWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
   }

  return (
    <Body>
    <LogoImage>
      <Link to='/'>
      <img src={LogoPipocaAgil} alt='Logo podcast Pipoca Ágil'
      />
      </Link>
    </LogoImage>
    <StyledLoginPage>
      <FormStyle>
        <Title>Área do assinante</Title>
        <SubTitle>Tenha acesso a conteúdos inovadores</SubTitle>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              {
                isMobile ? (
                  <HiddenLabel>
                    Login
                  </HiddenLabel>
                ) : (
                  <LableStyle>
                Login
                </LableStyle>
                )
              }
            <InputComponent 
              placeholder='email@email.com'
              type='text'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
            {
                isMobile ? (
                  <HiddenLabel>
                    Login
                  </HiddenLabel>
                ) : (
                  <LableStyle>
                Login
                </LableStyle>
                )
              }
            <PassowrdWrapper>
            <InputComponent
              className='passWordInput' 
              placeholder='****************'
              type= 'password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              />
            </PassowrdWrapper>    
            <PasswordSpan>Esqueci minha senha</PasswordSpan>
            </FormGroup>
            <Button
            >Continuar
            </Button>
            <CheckBoxWapper>
              <CheckBox />
              <SpanText>Mantenha-me Conectado</SpanText>
              <LinkDetalhes>Detalhes</LinkDetalhes>
            </CheckBoxWapper>
        <CadastreseDiv>
        <CadastreseText>Ainda não é assinante?</CadastreseText>
        <CadastreseText2><Link style={styleColor} to={"/register"} >Cadastre-se</Link> e conheça as vantagens</CadastreseText2>
        </CadastreseDiv>
      </form>
      </FormStyle>
    </StyledLoginPage>
      <ImageWrapper>
        <Image
          src={ImagemLogin}
          alt="Ibson podcast pipoca ágil"/> 
        
      </ImageWrapper>

  </Body>
  )
};