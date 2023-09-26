import React, { useState } from 'react';
import { StyledLoginPage, LogoImage, Title, SubTitle, FormStyle, ImageWrapper, Image, InputComponent, LableStyle, FormGroup, PasswordSpan, Body, Button, CheckBoxWapper, CheckBox, SpanText, LinkDetalhes, CadastreseDiv, CadastreseText,CadastreseText2, PassowrdWrapper, Icon } from './style'
import LogoPipocaAgil from './Imgs/LogoPipocaAgil.png'
import ImagemLogin from './Imgs/ImagemLogin.png'
import { Link } from 'react-router-dom';
import './style.css'

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
  const [showPassword, setShowPassword] = useState(false);
 
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const styleColor = {
    color: "#B33B3B",
  }

  return (
    <Body>
    <LogoImage>
      <img src={LogoPipocaAgil} alt='Logo podcast Pipoca Ágil'
      />
    </LogoImage>
    <StyledLoginPage>
      <FormStyle>
        <Title>Área do assinante</Title>
        <SubTitle>Tenha acesso a conteúdos inovadores</SubTitle>
          <form>
            <FormGroup>
            <LableStyle>
                Login
            <InputComponent 
              placeholder='email@email.com'
              type='text'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              />
            </LableStyle>
            </FormGroup>
            <FormGroup>
            <LableStyle>
                Senha
            <PassowrdWrapper>
            <InputComponent
              className='passWordInput' 
              placeholder='****************'
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              />
                <Icon
                  className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                  onClick={togglePasswordVisibility}
                ></Icon>
            </PassowrdWrapper>    
            </LableStyle>
            <PasswordSpan>Esqueci minha senha</PasswordSpan>
            </FormGroup>
            <Button>Continuar</Button>
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
        <Image src={ImagemLogin} alt="Ibson podcast pipoca ágil" />
      </ImageWrapper>

  </Body>
  )
};