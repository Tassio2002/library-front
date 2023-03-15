import {
  FlexContainer,
  LeftSide,
  RightSide,
  LogoContainer,
  SignupContainer,
  TextContainer,
  SubTitle,
  Title,
  IsMemberContainer,
  IsMemberSpan,
  IsMemberLink,
  FormContainer,
  ImputContainer,
  Input,
  SignpupBtn
} from "./styles";
import logo from "../../../public/images/logo.png";
import bgImage from "../../../public/images/aside-image.png";
import { MdOutlineDriveFileRenameOutline, MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export const SignupPage = () => {
  return (
    <FlexContainer>
      <LeftSide className="left-side">
        <LogoContainer>
          <img src={logo.src} alt="logo" />
        </LogoContainer>
        <SignupContainer>
          <TextContainer>
            <SubTitle>Comece gratuitamente</SubTitle>
            <Title>Crie sua conta</Title>
          </TextContainer>
          <IsMemberContainer>
            <IsMemberSpan>Já tem uma conta?</IsMemberSpan>
            <IsMemberLink href="">Log in</IsMemberLink>
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
            <SignpupBtn>Cadastre-se</SignpupBtn>
          </FormContainer>
        </SignupContainer>
      </LeftSide>
      <RightSide style={{ backgroundImage: `url(${bgImage.src})` }}></RightSide>
    </FlexContainer>
  );
};
