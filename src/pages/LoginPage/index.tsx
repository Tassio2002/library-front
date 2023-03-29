import {
  LinkToPage,
  FlexContainer,
  LeftSide,
  RightSide,
  LogoContainer,
  Container,
  TextContainer,
  SubTitle,
  Title,
  IsMemberContainer,
  IsMemberSpan,
  FormContainer,
  ImputContainer,
  Input,
  Button,
} from "../sheredComponents";
import logo from "../../../public/images/logo.png";
import bgImage from "../../../public/images/bg-login.png";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { loginRequest } from "../../services/apiServices";

export const LoginPage = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const request = () => {
    loginRequest(email, password);
  };
  return (
    <FlexContainer>
      <LeftSide className="left-side">
        <LogoContainer>
          <img src={logo.src} alt="logo" />
        </LogoContainer>
        <Container>
          <TextContainer>
            <SubTitle>Bem vindo de volta!</SubTitle>
            <Title>Faça o Login</Title>
          </TextContainer>
          <IsMemberContainer>
            <IsMemberSpan>Não tem uma conta?</IsMemberSpan>
            <LinkToPage path="/signup" linkName="Cadastre-se" />
          </IsMemberContainer>
          <FormContainer>
            <ImputContainer>
              <Input
                className="focus:outline-blue"
                type={"email"}
                placeholder={"Digite seu email..."}
                onChange={(event) => setEmail(event.target.value)}
              />
              <MdOutlineEmail size={28} />
            </ImputContainer>
            <ImputContainer>
              <Input
                className="focus:outline-blue"
                type={"password"}
                placeholder={"Digite sua senha..."}
                onChange={(event) => setPassword(event.target.value)}
              />
              <RiLockPasswordLine size={28} />
            </ImputContainer>
            <Button onClick={request}>Entrar</Button>
          </FormContainer>
        </Container>
      </LeftSide>
      <RightSide
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></RightSide>
    </FlexContainer>
  );
};
