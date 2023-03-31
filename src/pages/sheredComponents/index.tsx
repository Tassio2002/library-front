import tw from "tailwind-styled-components";
import Link from "next/link";

export const LinkToPage = (props) => {
  return (
    <Link className="text-[#60a5fa] text-lg font-normal" href={props.path}>{props.linkName}</Link>
  )
}

export const LinkMenu = (props) => {
  return (
    <Link
      className="text-gray-dark text-base font-semibold hover:text-blue"
      href={props.path}
    >
      {props.linkName}
    </Link>
  );
};

export const FlexContainer = tw.main`
  flex
`;

export const LeftSide = tw.div`
  w-1/2
  pt-6
  pl-10
`;

export const RightSide = tw.div`
  w-1/2
  h-screen
`;

export const LogoContainer = tw.div`
  w-full
  max-w-[8rem]
`;

export const Container = tw.main`
  w-full
  pl-12
  pr-6
  mt-20
`;

export const TextContainer = tw.div`
  w-full
`;

export const SubTitle = tw.h2`
  text-[#94a3b8]
  text-xl
  font-semibold
  mb-3
`;

export const Title = tw.h1`
  text-[#000]
  text-5xl
  font-bold
  mb-3
`;

export const IsMemberContainer = tw.div`
  flex
  mb-4
`;

export const IsMemberSpan = tw.span`
  text-[#94a3b8]
  text-lg
  font-normal
  pr-2
`;

export const IsMemberLink = tw.a`
  text-[#60a5fa]
  text-lg
  font-normal
`;

export const FormContainer = tw.div`
  w-4/5
  flex
  flex-col
`;

export const ImputContainer = tw.div`
  w-full
  flex
  items-baseline
`;

export const Input = tw.input`
  w-full
  max-w-2xl
  bg-[#f3f4f6]
  p-3
  rounded-xl
  font-semibold
  outline-none
  mb-4
  mr-2
`;

export const Button = tw.button`
  w-full
  p-4
  font-bold
  bg-blue
  text-[#fff]
  rounded-full
  mt-4
  hover:bg-purple
`;

export const PageContainer = tw.div`
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

export const MenuLogoContainer = tw.div`
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
