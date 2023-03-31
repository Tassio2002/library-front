import { BookBox, BookCover, BookTitle, ReserveButton } from "./styles";

export default function Book(props: any) {
  return (
    <BookBox>
      <BookCover src={props.cover} alt={props.alternativeText} />
      <BookTitle>{props.bookTitle}</BookTitle>
      <ReserveButton>Reservar</ReserveButton>
    </BookBox>
  );
}
