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
import bgImage from "../../../public/images/bg-signup.png";
import {
  MdOutlineDriveFileRenameOutline,
  MdOutlineEmail,
} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { signupRequest } from "../../services/apiServices";

export const SignupPage = () => {
  return (
    <FlexContainer>
      <LeftSide className="left-side">
        <LogoContainer>
          <img src={logo.src} alt="logo" />
        </LogoContainer>
        <Container>
          <TextContainer>
            <SubTitle>Comece gratuitamente</SubTitle>
            <Title>Crie sua conta</Title>
          </TextContainer>
          <IsMemberContainer>
            <IsMemberSpan>Já tem uma conta?</IsMemberSpan>
            <LinkToPage path="/" linkName="Login" />
          </IsMemberContainer>
          <FormContainer>
            <ImputContainer>
              <Input
                className="focus:outline-blue"
                type={"text"}
                placeholder={"Digite o seu nome..."}
              />
              <MdOutlineDriveFileRenameOutline size={28} />
            </ImputContainer>
            <ImputContainer>
              <Input
                className="focus:outline-blue"
                type={"email"}
                placeholder={"Digite seu email..."}
              />
              <MdOutlineEmail size={28} />
            </ImputContainer>
            <ImputContainer>
              <Input
                className="focus:outline-blue"
                type={"password"}
                placeholder={"Digite uma senha..."}
              />
              <RiLockPasswordLine size={28} />
            </ImputContainer>
            <Button onClick={signupRequest}>Cadastre-se</Button>
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
