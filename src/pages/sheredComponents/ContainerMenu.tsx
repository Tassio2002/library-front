import {
  AsideContainer,
  PageContainer,
  MaiContainer,
  MenuLogoContainer,
  MenuContainer,
  MenuText,
  MenuList,
  LinkContainer,
  LinkMenu,
  Header,
  HeaderTitle,
  ButtonsContainer,
  HeaderButton,
  MainTitle,
  BooksContaner,
  BookBox,
  BookCover,
  BookTitle,
} from "./index";
import logo from "../../../public/images/logo.png";
import { RiBook2Line } from "react-icons/ri";
import { HiOutlineLibrary } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
// Este é o componente de menu, usar como shared componnet e passar props
export const BooksPage = (props: any) => {
  return (
    <PageContainer>
      <AsideContainer>
        <MenuLogoContainer>
          <img src={logo.src} alt="logo" />
        </MenuLogoContainer>
        <MenuContainer>
          <MenuText>Menu</MenuText>
          <MenuList>
            <LinkContainer>
              <HiOutlineLibrary size={20} className="mr-2" />
              <LinkMenu path="/books/reserve_book" linkName="Biblioteca" />
            </LinkContainer>
            <LinkContainer>
              <RiBook2Line size={20} className="mr-2" />
              <LinkMenu path="/books/my_books" linkName="Meus livros" />
            </LinkContainer>
            <LinkContainer>
              <FiLogOut size={20} className="mr-2" />
              <LinkMenu path="/" linkName="Sair" />
            </LinkContainer>
          </MenuList>
        </MenuContainer>
      </AsideContainer>
      <MaiContainer>
        <Header>
          <HeaderTitle>{props.menuTitle}</HeaderTitle>
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
        <MainTitle>{props.mainTitle}</MainTitle>
        <BooksContaner>
          <BookBox>
            <BookCover
              src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg"
              alt="book"
            />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
          <BookBox>
            <BookCover
              src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg"
              alt="book"
            />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
          <BookBox>
            <BookCover
              src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg"
              alt="book"
            />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
          <BookBox>
            <BookCover
              src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg"
              alt="book"
            />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
          <BookBox>
            <BookCover
              src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg"
              alt="book"
            />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
          <BookBox>
            <BookCover
              src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg"
              alt="book"
            />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
          <BookBox>
            <BookCover
              src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg"
              alt="book"
            />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
          <BookBox>
            <BookCover
              src="https://m.media-amazon.com/images/I/515rjH7yikL.jpg"
              alt="book"
            />
            <BookTitle>O milagre da manhã</BookTitle>
          </BookBox>
        </BooksContaner>
      </MaiContainer>
    </PageContainer>
  );
};
