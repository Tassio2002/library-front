import tw from "tailwind-styled-components";

export const BookBox = tw.div`
  w-1/4
  mb-6
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

export const ReserveButton = tw.button`
  py-1
  px-6
  rounded-md
  bg-[#6356f3]
  text-center
  font-medium
  text-[#fff]
  hover:bg-[#6356f3e3]
  active:bg-[#6356f3b8]
`;