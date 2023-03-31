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
} from "./index";
import logo from "../../../public/images/logo.png";
import { RiBook2Line } from "react-icons/ri";
import { HiOutlineLibrary } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import Book from "../components/Book";
import { useEffect, useState } from "react";
import axios from "axios";
import { mountUrl } from "../../services/apiServices";

export const BooksPage = (props: any) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function getAllBooks() {
      try {
        const res = await axios.get(mountUrl("book/all_books"), {
          headers: {
            Authorization:
              `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUsImlhdCI6MTY4MDIyNzQ3MiwiZXhwIjoxNjgwMjM0NjcyfQ.2VMqe7HSFv1GN3a7VxFw-_hICT-SSV_PFn_-ZEZfCvM`,
          },
        });
        const data = res.data.books
        setBooks(data)
      } catch (error) {
        console.log(error);
      }
    }
    getAllBooks();
  }, []);

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
          {books.map(book => (
            <Book
            key={book.id}
            cover={book.image_url}
            alternativeText={book.title}
            bookTitle={book.title}
          />
          ))}
        </BooksContaner>
      </MaiContainer>
    </PageContainer>
  );
};
