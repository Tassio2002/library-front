import {
  AsideContainer,
  Container,
  MaiContainer,
  LogoContainer,
  MenuContainer,
  MenuText,
  MenuList,
  LinkContainer,
  LinkToPage,
  Header,
  HeaderTitle,
  ButtonsContainer,
  HeaderButton,
  MainTitle,
  BooksContaner,
  BookBox,
  BookCover,
  BookTitle
} from "./components";
import logo from "../../../public/images/logo.png";
import { RiBook2Line } from "react-icons/ri";
import { HiOutlineLibrary } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

export const MyBooksPage = () => {
  return (
    <Container>
      <AsideContainer>
        <LogoContainer>
          <img src={logo.src} alt="logo" />
        </LogoContainer>
        <MenuContainer>
          <MenuText>Menu</MenuText>
          <MenuList>
            <LinkContainer>
              <HiOutlineLibrary size={20} className="mr-2" />
              <LinkToPage path="/" linkName="Biblioteca" />
            </LinkContainer>
            <LinkContainer>
              <RiBook2Line size={20} className="mr-2" />
              <LinkToPage path="/" linkName="Meus livros" />
            </LinkContainer>
          </MenuList>
        </MenuContainer>
      </AsideContainer>
      <MaiContainer>
        <Header>
          <HeaderTitle>Meus Livros</HeaderTitle>
          <ButtonsContainer>
            <Link href="/">
              <HeaderButton>
                <BsSearch size={20} className="text-[#52525b]" />
              </HeaderButton>
            </Link>
            <Link href="/">
              <HeaderButton>
                <AiOutlinePlus size={20} className="text-[#52525b]" />
              </HeaderButton>
            </Link>
            <Link href="/">
              <HeaderButton>
                <HiOutlineLibrary size={20} className="text-[#52525b]" />
              </HeaderButton>
            </Link>
          </ButtonsContainer>
        </Header>
        <MainTitle>Sua Coleção</MainTitle>
        <BooksContaner>
          <BookBox>
            <BookCover src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg" alt="book" />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
          <BookBox>
            <BookCover src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg" alt="book" />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
          <BookBox>
            <BookCover src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg" alt="book" />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
          <BookBox>
            <BookCover src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg" alt="book" />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
          <BookBox>
            <BookCover src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg" alt="book" />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
          <BookBox>
            <BookCover src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg" alt="book" />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
          <BookBox>
            <BookCover src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg" alt="book" />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
          <BookBox>
            <BookCover src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg" alt="book" />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
        </BooksContaner>
      </MaiContainer>
    </Container>
  );
};
