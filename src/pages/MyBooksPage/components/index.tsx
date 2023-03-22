import tw from "tailwind-styled-components";
import Link from "next/link";

export const LinkToPage = (props) => {
  return (
    <Link
      className="text-gray-dark text-base font-semibold hover:text-blue"
      href={props.path}
    >
      {props.linkName}
    </Link>
  );
};

export const Container = tw.div`
  w-screen
  flex
  overflow-x-hidden
`;

export const AsideContainer = tw.aside`
  w-1/5
  border-r
border-[#d1d5db]
`;

export const MaiContainer = tw.main`
  w-4/5
`;

export const LogoContainer = tw.div`
  w-full
  max-w-[8rem]
  mt-4
  ml-8
  mb-14
`;

export const MenuContainer = tw.div`
  w-full
  pl-6
`;

export const MenuText = tw.h3`
  text-xl
  font-semibold
  text-[#1653af]
`;

export const MenuList = tw.nav`
  w-full
  flex
  flex-col
`;

export const LinkContainer = tw.div`
  w-full
  mt-4
  flex
  items-center
  hover:text-blue
`;

export const Header = tw.header`
  w-100
  flex
  justify-between
  p-8
  border-b
  border-[#d1d5db]
`;

export const HeaderTitle = tw.h1`
  text-4xl
  font-semibold
`;

export const ButtonsContainer = tw.div`
  w-1/4
  flex
`;

export const HeaderButton = tw.button`
  w-10
  h-10
  mr-4
  border-[#d1d5db]
  border
  rounded-full
  flex
  justify-center
  items-center
`;

export const MainTitle = tw.h1`
  p-8
  text-2xl
  font-semibold
`;

export const BooksContaner = tw.div`
  w-full
  flex
  flex-wrap
`;

export const BookBox = tw.div`
  w-1/4
  flex
  flex-col
  items-center
`;

export const BookCover = tw.img`
  w-52
  pb-3
  drop-shadow-xl
`;

export const BookTitle = tw.p`
  w-52
  font-semibold
  text-[#374151]
  text-center
`;
